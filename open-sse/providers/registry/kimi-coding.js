import { CLAUDE_API_HEADERS, KIMI_CODING_BASE_URL } from "../shared.js";

export default {
  id: "kimi-coding",
  alias: "kmc",
  display: { name: "Kimi Coding", icon: "psychology", color: "#1E40AF", textIcon: "KC", website: "https://kimi.moonshot.cn", notice: { signupUrl: "https://kimi.moonshot.cn" } },
  category: "oauth",
  transport: {
    baseUrl: KIMI_CODING_BASE_URL,
    format: "claude",
    urlSuffix: "?beta=true",
    headers: { ...CLAUDE_API_HEADERS },
    clientId: "17e5f671-d194-4dfb-9706-5516cb48c098",
    tokenUrl: "https://auth.kimi.com/api/oauth/token",
    refreshUrl: "https://auth.kimi.com/api/oauth/token",
      auth: {"combined":true,"header":"x-api-key","scheme":"raw","hooks":["kimiHeaders"]},
  },
  oauth: {
    deviceCodeUrl: "https://auth.kimi.com/api/oauth/device_authorization",
    tokenUrl: "https://auth.kimi.com/api/oauth/token"
  ,
    refreshLeadMs: 300000
  },
  models: [
    { id: "kimi-k2.6", name: "Kimi K2.6" },
    { id: "kimi-k2.5", name: "Kimi K2.5" },
    { id: "kimi-k2.5-thinking", name: "Kimi K2.5 Thinking" },
    { id: "kimi-latest", name: "Kimi Latest" }
  ],
  features: {"usage":true},
};
