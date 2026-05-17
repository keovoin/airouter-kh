// Tiny Telegram Bot API client. Just the methods the webhook handler needs.
// Docs: https://core.telegram.org/bots/api

const API_BASE = "https://api.telegram.org";

function token() {
  const t = process.env.TELEGRAM_BOT_TOKEN;
  if (!t) throw new Error("TELEGRAM_BOT_TOKEN not set");
  return t;
}

async function call(method, body) {
  const res = await fetch(`${API_BASE}/bot${token()}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data?.ok === false) {
    const desc = data?.description || res.statusText || "unknown";
    throw new Error(`telegram ${method} failed: ${desc}`);
  }
  return data.result;
}

export const telegram = {
  sendMessage(chatId, text, opts = {}) {
    return call("sendMessage", {
      chat_id: chatId,
      text,
      // Use HTML mode — fewer escaping pitfalls than MarkdownV2.
      parse_mode: opts.parseMode || "HTML",
      disable_web_page_preview: true,
      reply_to_message_id: opts.replyTo,
      ...opts.extra,
    });
  },

  editMessage(chatId, messageId, text, opts = {}) {
    return call("editMessageText", {
      chat_id: chatId,
      message_id: messageId,
      text,
      parse_mode: opts.parseMode || "HTML",
      disable_web_page_preview: true,
    });
  },

  sendChatAction(chatId, action = "typing") {
    return call("sendChatAction", { chat_id: chatId, action });
  },

  answerCallback(callbackQueryId, text) {
    return call("answerCallbackQuery", {
      callback_query_id: callbackQueryId,
      text,
    });
  },

  setWebhook(url, secretToken) {
    return call("setWebhook", {
      url,
      secret_token: secretToken,
      allowed_updates: ["message"],
      drop_pending_updates: true,
    });
  },

  deleteWebhook() {
    return call("deleteWebhook", { drop_pending_updates: true });
  },

  getWebhookInfo() {
    return call("getWebhookInfo", {});
  },
};
