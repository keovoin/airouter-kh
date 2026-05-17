// HTML-mode formatter. Telegram's HTML parser only allows a small whitelist:
// <b><i><u><s><a><code><pre>. Everything else must be escaped.
// Refs: https://core.telegram.org/bots/api#html-style

const TG_MAX = 4000; // Telegram caps at 4096; keep margin for safety

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Convert markdown-ish content from LLMs into Telegram-safe HTML.
// We're conservative: convert fenced code blocks and inline code; leave the rest as plain text.
export function toTelegramHtml(text) {
  if (!text) return "";
  const parts = [];
  let i = 0;
  const src = String(text);

  // Walk the string, alternating between non-code and code segments.
  while (i < src.length) {
    const fenceStart = src.indexOf("```", i);
    if (fenceStart === -1) {
      // No more fenced blocks — process the tail for inline code and escape.
      parts.push(processInline(src.slice(i)));
      break;
    }
    if (fenceStart > i) {
      parts.push(processInline(src.slice(i, fenceStart)));
    }
    const fenceEnd = src.indexOf("```", fenceStart + 3);
    if (fenceEnd === -1) {
      // Unterminated fence — treat the rest as code.
      const code = src.slice(fenceStart + 3);
      parts.push(`<pre>${escapeHtml(code)}</pre>`);
      break;
    }
    let block = src.slice(fenceStart + 3, fenceEnd);
    // Strip optional language tag on first line (e.g. ```js)
    block = block.replace(/^\w*\n/, "");
    parts.push(`<pre>${escapeHtml(block)}</pre>`);
    i = fenceEnd + 3;
  }
  return parts.join("");
}

function processInline(s) {
  // Escape first, then wrap inline `code` (which still uses backticks in escaped form? no — escape doesn't touch them).
  // Order: escape HTML, then convert backtick-code which is unaffected by escaping.
  const escaped = escapeHtml(s);
  return escaped.replace(/`([^`\n]+)`/g, (_, c) => `<code>${c}</code>`);
}

// Split a long HTML string at safe boundaries — prefer end of </pre> blocks,
// then double newlines, then single newlines, then hard split.
export function splitForTelegram(html) {
  if (html.length <= TG_MAX) return [html];
  const out = [];
  let buf = html;
  while (buf.length > TG_MAX) {
    let cut = buf.lastIndexOf("</pre>", TG_MAX);
    if (cut !== -1) cut += "</pre>".length;
    if (cut < TG_MAX / 2) cut = buf.lastIndexOf("\n\n", TG_MAX);
    if (cut < TG_MAX / 2) cut = buf.lastIndexOf("\n", TG_MAX);
    if (cut < 100) cut = TG_MAX; // last resort
    out.push(buf.slice(0, cut));
    buf = buf.slice(cut);
  }
  if (buf.length) out.push(buf);
  return out;
}

export function helpText() {
  return [
    "<b>9Router Telegram Bot</b>",
    "",
    "Send any plain message and I'll forward it to the default model.",
    "",
    "<b>Chat</b>",
    "<code>/model X</code>     — set default model for this chat",
    "<code>/models</code>      — list available models",
    "<code>/reset</code>       — clear conversation memory",
    "<code>/history</code>     — show last 10 turns",
    "",
    "<b>Status &amp; usage</b>",
    "<code>/status</code>      — gateway health + provider count",
    "<code>/usage</code>       — today's tokens (text + chart)",
    "<code>/usage week</code>  — last 7 days, all providers (chart)",
    "<code>/usage today</code> — today's tokens by provider (chart)",
    "<code>/usage detail</code>— text-only summary",
    "",
    "<b>Misc</b>",
    "<code>/myid</code>        — show your chat id",
    "<code>/help</code>        — this message",
  ].join("\n");
}
