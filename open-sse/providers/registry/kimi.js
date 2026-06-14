import { CLAUDE_API_HEADERS, KIMI_CODING_BASE_URL } from "../shared.js";

export default {
  id: "kimi",
  alias: "kimi",
  display: {
      "name": "Kimi",
      "icon": "psychology",
      "color": "#1E3A8A",
      "textIcon": "KM",
      "website": "https://kimi.moonshot.cn",
      "notice": {
          "apiKeyUrl": "https://platform.moonshot.ai/console/api-keys"
      }
  },
  category: "apikey",
  transport: {
    baseUrl: KIMI_CODING_BASE_URL,
    format: "claude",
    urlSuffix: "?beta=true",
    headers: { ...CLAUDE_API_HEADERS },
      auth: {"combined":true,"header":"x-api-key","scheme":"raw"},
  },
  media: {
    serviceKinds: ["llm", "webSearch"],
    searchViaChat: { defaultModel: "kimi-k2.5", pricingUrl: "https://platform.moonshot.ai/docs/pricing/chat" }
  },
  models: [
    { id: "kimi-k2.6", name: "Kimi K2.6" },
    { id: "kimi-k2.5", name: "Kimi K2.5" },
    { id: "kimi-k2.5-thinking", name: "Kimi K2.5 Thinking" },
    { id: "kimi-latest", name: "Kimi Latest" }
  ],
};
