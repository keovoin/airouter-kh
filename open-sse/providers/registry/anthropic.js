import { CLAUDE_API_HEADERS } from "../shared.js";

export default {
  id: "anthropic",
  alias: "anthropic",
  display: {
      "name": "Anthropic",
      "icon": "smart_toy",
      "color": "#D97757",
      "textIcon": "AN",
      "website": "https://console.anthropic.com",
      "notice": {
          "apiKeyUrl": "https://console.anthropic.com/settings/keys"
      }
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.anthropic.com/v1/messages",
    format: "claude",
    headers: { ...CLAUDE_API_HEADERS }
  },
  media: {
    serviceKinds: ["llm", "imageToText"]
  },
  models: [
    { id: "claude-sonnet-4-20250514", name: "Claude Sonnet 4" },
    { id: "claude-opus-4-20250514", name: "Claude Opus 4" },
    { id: "claude-3-5-sonnet-20241022", name: "Claude 3.5 Sonnet" }
  ]
};
