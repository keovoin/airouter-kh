import { CLAUDE_API_HEADERS } from "../shared.js";

export default {
  id: "minimax-cn",
  alias: "minimax-cn",
  display: {
    "name": "Minimax (China)",
    "icon": "memory",
    "color": "#DC2626",
    "textIcon": "MC",
    "website": "https://www.minimaxi.com",
    "notice": {
      "apiKeyUrl": "https://platform.minimaxi.com/user-center/basic-information/interface-key"
    }
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.minimaxi.com/anthropic/v1/messages",
    format: "claude",
    urlSuffix: "?beta=true",
    headers: { ...CLAUDE_API_HEADERS },
    quirks: { dropOutputConfig: true },
    reasoningInject: { scope: "all" },
    auth: { "combined": true, "header": "x-api-key", "scheme": "raw" },
    usage: { urls: ["https://www.minimaxi.com/v1/api/openplatform/coding_plan/remains", "https://api.minimaxi.com/v1/api/openplatform/coding_plan/remains"] },
  },
  media: {
    serviceKinds: ["llm", "tts"],
    ttsConfig: { baseUrl: "https://api.minimaxi.com/v1/t2a_v2", authType: "apikey", authHeader: "bearer", format: "minimax-tts", models: [{ id: "speech-2.8-hd", name: "Speech 2.8 HD" }, { id: "speech-2.8-turbo", name: "Speech 2.8 Turbo" }, { id: "speech-2.6-hd", name: "Speech 2.6 HD" }, { id: "speech-2.6-turbo", name: "Speech 2.6 Turbo" }, { id: "speech-02-hd", name: "Speech 02 HD" }, { id: "speech-02-turbo", name: "Speech 02 Turbo" }, { id: "speech-01-hd", name: "Speech 01 HD" }, { id: "speech-01-turbo", name: "Speech 01 Turbo" }] }
  },
  models: [
    { id: "MiniMax-M3", name: "MiniMax M3", targetFormat: "claude" },
    { id: "MiniMax-M2.7", name: "MiniMax M2.7" },
    { id: "MiniMax-M2.5", name: "MiniMax M2.5" },
    { id: "MiniMax-M2.1", name: "MiniMax M2.1" }
  ],
  features: { "usage": true, "usageApikey": true },
};
