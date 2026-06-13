import { withCodexReviewModels } from "../models/helpers.js";

export default {
  id: "codex",
  alias: "cx",
  transport: {
    baseUrl: "https://chatgpt.com/backend-api/codex/responses",
    format: "openai-responses",
    forceStream: true,
    headers: {
      "originator": "codex_cli_rs",
      "User-Agent": "codex_cli_rs/0.136.0"
    },
    clientId: "app_EMoamEEZ73f0CkXaXp7hrann",
    tokenUrl: "https://auth.openai.com/oauth/token"
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
  ])
};
