import { withCodexReviewModels } from "../models/helpers.js";

export default {
  id: "codex",
  alias: "cx",
  display: {
      "name": "OpenAI Codex",
      "icon": "code",
      "color": "#3B82F6",
      "website": "https://chatgpt.com/codex",
      "notice": {
          "signupUrl": "https://chatgpt.com/codex"
      },
      "deprecated": true,
      "deprecationNotice": "RISK_NOTICE",
      "kindNotice": {
          "image": "Requires a ChatGPT Plus (or higher) account. Free accounts are not supported for image generation."
      }
  },
  category: "oauth",
  uiAlias: "cx",
  thinkingConfig: {"options":["auto","none","low","medium","high"],"defaultMode":"auto"},
  transport: {
    baseUrl: "https://chatgpt.com/backend-api/codex/responses",
    format: "openai-responses",
    forceStream: true,
    headers: {
      "originator": "codex_cli_rs",
      "User-Agent": "codex_cli_rs/0.136.0"
    },
    usage: { url: "https://chatgpt.com/backend-api/wham/usage" }
  },
  oauth: {
    clientId: "app_EMoamEEZ73f0CkXaXp7hrann",
    authorizeUrl: "https://auth.openai.com/oauth/authorize",
    tokenUrl: "https://auth.openai.com/oauth/token",
    scope: "openid profile email offline_access",
    codeChallengeMethod: "S256",
    fixedPort: 1455,
    callbackPath: "/auth/callback",
    extraParams: {
      id_token_add_organizations: "true",
      codex_cli_simplified_flow: "true",
      originator: "codex_cli_rs"
    }
  ,
    refreshLeadMs: 432000000
  ,
    refresh: {"encoding":"form","scope":"openid profile email offline_access"}
  ,
    maxRefreshAgeMs: 691200000
  ,
    trackRefreshAt: true
  },
  media: {
    serviceKinds: ["llm", "image"]
  },
  models: withCodexReviewModels([
    { id: "gpt-5.5", name: "GPT 5.5" },
    { id: "gpt-5.4", name: "GPT 5.4" },
    { id: "gpt-5.4-mini", name: "GPT 5.4 Mini" },
    { id: "gpt-5.3-codex", name: "GPT 5.3 Codex" },
    { id: "gpt-5.3-codex-xhigh", name: "GPT 5.3 Codex (xHigh)" },
    { id: "gpt-5.3-codex-high", name: "GPT 5.3 Codex (High)" },
    { id: "gpt-5.3-codex-low", name: "GPT 5.3 Codex (Low)" },
    { id: "gpt-5.3-codex-none", name: "GPT 5.3 Codex (None)" },
    { id: "gpt-5.3-codex-spark", name: "GPT 5.3 Codex Spark" },
    { id: "gpt-5.5-image", name: "GPT 5.5 Image", type: "image", capabilities: ["text2img", "edit"], params: ["size", "quality", "background", "image_detail", "output_format"] },
    { id: "gpt-5.4-image", name: "GPT 5.4 Image", type: "image", capabilities: ["text2img", "edit"], params: ["size", "quality", "background", "image_detail", "output_format"] },
    { id: "gpt-5.3-image", name: "GPT 5.3 Image", type: "image", capabilities: ["text2img", "edit"], params: ["size", "quality", "background", "image_detail", "output_format"] }
  ]),
  features: {"usage":true},
};
