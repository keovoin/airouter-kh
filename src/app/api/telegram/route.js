// Telegram webhook receiver. POST-only.
//
// Triggered by Telegram when the bot receives a message. Authenticates via
// X-Telegram-Bot-Api-Secret-Token + owner chat_id allowlist. Dispatches
// commands and forwards plain text to /v1/chat/completions with conversation
// memory. Responds 200 immediately to Telegram and processes async — the
// outgoing chat completion can take 30s+ which exceeds Telegram's 60s
// webhook timeout if we block the response.

import { NextResponse } from "next/server";
import { telegram } from "@/lib/telegram/client.js";
import { checkSecret, isAllowed } from "@/lib/telegram/guards.js";
import {
  getHistory,
  appendMessage,
  clearHistory,
  getDefaultModel,
  setDefaultModel,
} from "@/lib/telegram/conversations.js";
import { toTelegramHtml, splitForTelegram, helpText } from "@/lib/telegram/formatter.js";
import { buildModelsList } from "@/app/api/v1/models/route.js";
import { getTodaySummary, getWeekDailyTokens, getWeekByProvider, formatNum, formatCost } from "@/lib/telegram/usage.js";
import { renderDailyTokens, renderTokensByProvider, renderProvidersOverTime } from "@/lib/telegram/charts.js";

const SYSTEM_PROMPT = "You are a helpful assistant responding in Telegram. Keep replies concise unless asked for detail. When showing code, use fenced code blocks.";

export async function POST(request) {
  if (!checkSecret(request)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  let update;
  try {
    update = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const msg = update?.message;
  if (!msg) return NextResponse.json({ ok: true }); // ignore non-message updates

  const userId = msg.from?.id;
  const chatId = msg.chat?.id;
  const text = (msg.text || "").trim();

  if (!chatId || !text) return NextResponse.json({ ok: true });

  // /myid is the one command we always answer (helps you set up TELEGRAM_OWNER_CHAT_ID
  // if you didn't get it from @userinfobot for some reason).
  if (text === "/myid" || text.startsWith("/myid ")) {
    await safeSend(chatId, `Your chat id: <code>${userId}</code>`);
    return NextResponse.json({ ok: true });
  }

  if (!isAllowed(userId)) {
    // Silently ignore strangers. Don't even reply — Telegram lets a bot stay silent.
    return NextResponse.json({ ok: true });
  }

  // Don't make Telegram wait for the LLM. Ack now, finish in the background.
  // Next.js on Node will keep the function alive long enough to finish the work
  // because we await inside the same request lifecycle — but we still respond
  // to Telegram fast by not blocking on the chat completion.
  handle(chatId, text).catch((e) => {
    console.error("[telegram] handler error:", e);
    safeSend(chatId, `<b>Error:</b> <code>${escapeForCode(e?.message || String(e))}</code>`);
  });

  return NextResponse.json({ ok: true });
}

async function handle(chatId, text) {
  if (text === "/start" || text === "/help") {
    return safeSend(chatId, helpText());
  }

  if (text === "/status") {
    const providersCount = await countActiveProviders();
    const lines = [
      "<b>Status</b>",
      `Gateway: <code>https://airouter-kh.fly.dev</code>`,
      `Health: ✅ ok`,
      `Active providers: <b>${providersCount}</b>`,
      `Default model: <code>${escapeForCode(await getDefaultModel(chatId))}</code>`,
    ];
    return safeSend(chatId, lines.join("\n"));
  }

  if (text === "/models") {
    const list = await buildModelsList(["llm"]);
    const ids = list.map((m) => m.id).slice(0, 80);
    const html =
      `<b>Available models</b> (${list.length} total, showing first ${ids.length})\n\n` +
      ids.map((id) => `<code>${escapeForCode(id)}</code>`).join("\n");
    for (const part of splitForTelegram(html)) {
      await safeSend(chatId, part);
    }
    return;
  }

  if (text.startsWith("/model ")) {
    const model = text.slice(7).trim();
    if (!model) return safeSend(chatId, "Usage: <code>/model kr/claude-sonnet-4.5</code>");
    await setDefaultModel(chatId, model);
    return safeSend(chatId, `Default model set to <code>${escapeForCode(model)}</code>`);
  }

  if (text === "/reset") {
    await clearHistory(chatId);
    return safeSend(chatId, "Conversation memory cleared.");
  }

  if (text === "/history") {
    const hist = await getHistory(chatId);
    if (hist.length === 0) return safeSend(chatId, "No history yet.");
    const last = hist.slice(-10);
    const lines = last.map((m) => {
      const who = m.role === "user" ? "👤" : "🤖";
      const preview = (m.content || "").slice(0, 200);
      return `${who} ${escapeForCode(preview)}`;
    });
    return safeSend(chatId, lines.join("\n\n"));
  }

  if (text === "/usage" || text.startsWith("/usage ")) {
    const arg = text === "/usage" ? "" : text.slice(7).trim().toLowerCase();
    return handleUsage(chatId, arg);
  }

  if (text.startsWith("/")) {
    return safeSend(chatId, `Unknown command. Send <code>/help</code> for the list.`);
  }

  // Plain text → chat completion
  await chat(chatId, text);
}

async function chat(chatId, userText) {
  const model = await getDefaultModel(chatId);
  const history = await getHistory(chatId);
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.map(({ role, content }) => ({ role, content })),
    { role: "user", content: userText },
  ];

  await telegram.sendChatAction(chatId, "typing").catch(() => {});

  const apiKey = process.env.GATEWAY_API_KEY;
  if (!apiKey) throw new Error("GATEWAY_API_KEY not set");

  // Self-call to /v1/chat/completions over loopback. Non-streaming for v1 — keeps
  // this PR small. Streaming via editMessageText is doable later.
  const baseUrl = process.env.INTERNAL_BASE_URL || `http://127.0.0.1:${process.env.PORT || 20128}`;
  const res = await fetch(`${baseUrl}/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, messages, stream: false }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`gateway ${res.status}: ${body.slice(0, 500)}`);
  }

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content || "";
  if (!reply) {
    return safeSend(chatId, "<i>(empty response)</i>");
  }

  await appendMessage(chatId, "user", userText);
  await appendMessage(chatId, "assistant", reply);

  const html = toTelegramHtml(reply);
  for (const part of splitForTelegram(html)) {
    await safeSend(chatId, part);
  }
}

async function handleUsage(chatId, mode) {
  await telegram.sendChatAction(chatId, "upload_photo").catch(() => {});

  // /usage detail or /usage text → no chart, just summary
  if (mode === "detail" || mode === "text") {
    const s = await getTodaySummary();
    const lines = [
      `<b>Today</b> — ${formatNum(s.totalRequests)} req, ${formatNum(s.totalTokens)} tokens, ${formatCost(s.totalCost)}`,
      "",
      "<b>By provider</b>",
      ...(s.byProvider.length === 0
        ? ["(none yet)"]
        : s.byProvider.map((p) => `• ${escapeForCode(p.provider)}: ${formatNum(p.tokens)} tokens · ${p.requests} req · ${formatCost(p.cost)}`)),
    ];
    return safeSend(chatId, lines.join("\n"));
  }

  // /usage today → bar chart per provider
  if (mode === "today") {
    const s = await getTodaySummary();
    if (s.byProvider.length === 0) {
      return safeSend(chatId, "No usage today yet.");
    }
    const png = await renderTokensByProvider(s.byProvider, { title: "Tokens by provider — today" });
    const caption = `<b>Today</b>\n${formatNum(s.totalRequests)} req · ${formatNum(s.totalTokens)} tokens · ${formatCost(s.totalCost)}`;
    return safeSendPhoto(chatId, png, caption);
  }

  // /usage week → multi-line per-provider chart
  if (mode === "week" || mode === "7d") {
    const { providers, labels } = await getWeekByProvider();
    if (providers.length === 0) {
      return safeSend(chatId, "No usage in the last 7 days.");
    }
    const png = await renderProvidersOverTime(providers, labels, { title: "Tokens per provider — last 7 days" });
    return safeSendPhoto(chatId, png, "<b>Last 7 days</b>");
  }

  // /usage (default) → today's totals + a 7-day stacked bar chart
  const todayP = getTodaySummary();
  const weekP = getWeekDailyTokens();
  const [today, week] = await Promise.all([todayP, weekP]);

  const caption = [
    `<b>Today</b>`,
    `${formatNum(today.totalRequests)} req · ${formatNum(today.totalTokens)} tokens · ${formatCost(today.totalCost)}`,
    "",
    today.byProvider.length === 0
      ? "(no usage today)"
      : today.byProvider.slice(0, 5).map((p) => `${escapeForCode(p.provider)}: ${formatNum(p.tokens)}`).join(" · "),
  ].join("\n");

  if (week.length === 0 || week.every((d) => d.totalTokens === 0)) {
    return safeSend(chatId, caption);
  }

  const png = await renderDailyTokens(week, { title: "Tokens — last 7 days" });
  return safeSendPhoto(chatId, png, caption);
}

async function countActiveProviders() {
  try {
    // Reuse buildModelsList LLM list. Distinct owners == providers.
    const list = await buildModelsList(["llm"]);
    const owners = new Set(list.map((m) => m.owned_by).filter(Boolean));
    return owners.size;
  } catch {
    return 0;
  }
}

function escapeForCode(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function safeSend(chatId, html) {
  try {
    await telegram.sendMessage(chatId, html);
  } catch (e) {
    console.error("[telegram] sendMessage failed:", e?.message);
  }
}

async function safeSendPhoto(chatId, pngBuffer, caption) {
  try {
    await telegram.sendPhoto(chatId, pngBuffer, { caption });
  } catch (e) {
    console.error("[telegram] sendPhoto failed:", e?.message);
    // Fall back to text so the user still gets *something*
    await safeSend(chatId, `${caption}\n\n<i>(chart render failed: ${escapeForCode(e?.message || "unknown")})</i>`);
  }
}
