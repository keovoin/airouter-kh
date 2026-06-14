import { CLAUDE_API_HEADERS } from "../shared.js";

export default {
  id: "minimax",
  alias: "minimax",
  display: {
      "name": "Minimax Coding",
      "icon": "memory",
      "color": "#7C3AED",
      "textIcon": "MM",
      "website": "https://www.minimaxi.com",
      "notice": {
          "apiKeyUrl": "https://platform.minimaxi.com/user-center/basic-information/interface-key"
      }
  },
  category: "apikey",
  transport: {
    baseUrl: "https://api.minimax.io/anthropic/v1/messages",
    format: "claude",
    urlSuffix: "?beta=true",
    headers: { ...CLAUDE_API_HEADERS },
    quirks: { dropOutputConfig: true },
    reasoningInject: { scope: "all" },
      auth: {"combined":true,"header":"x-api-key","scheme":"raw"},
    usage: { urls: ["https://www.minimax.io/v1/token_plan/remains", "https://api.minimax.io/v1/api/openplatform/coding_plan/remains"] },
  },
  media: {
    serviceKinds: ["llm", "image", "imageToText", "webSearch", "tts"],
    ttsConfig: { baseUrl: "https://api.minimax.io/v1/t2a_v2", authType: "apikey", authHeader: "bearer", format: "minimax-tts", models: [{ id: "speech-2.8-hd", name: "Speech 2.8 HD" }, { id: "speech-2.8-turbo", name: "Speech 2.8 Turbo" }, { id: "speech-2.6-hd", name: "Speech 2.6 HD" }, { id: "speech-2.6-turbo", name: "Speech 2.6 Turbo" }, { id: "speech-02-hd", name: "Speech 02 HD" }, { id: "speech-02-turbo", name: "Speech 02 Turbo" }, { id: "speech-01-hd", name: "Speech 01 HD" }, { id: "speech-01-turbo", name: "Speech 01 Turbo" }] },
    searchViaChat: { defaultModel: "MiniMax-M2.7", pricingUrl: "https://www.minimaxi.com/document/price" },
    imageConfig: { baseUrl: "https://api.minimaxi.com/v1/images/generations" }
  },
  models: [
    { id: "MiniMax-M3", name: "MiniMax M3", targetFormat: "claude" },
    { id: "MiniMax-M2.7", name: "MiniMax M2.7" },
    { id: "MiniMax-M2.5", name: "MiniMax M2.5" },
    { id: "MiniMax-M2.1", name: "MiniMax M2.1" },
    { id: "minimax-image-01", name: "MiniMax Image 01", type: "image", params: ["n", "size", "response_format"] }
  ],
  features: {"usage":true,"usageApikey":true},
};
