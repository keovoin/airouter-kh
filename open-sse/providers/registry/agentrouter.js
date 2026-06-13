import { CLAUDE_CLI_SPOOF_HEADERS } from "../shared.js";

export default {
  id: "agentrouter",
  alias: "agentrouter",
  transport: {
    baseUrl: "https://agentrouter.org/v1/messages",
    format: "claude",
    headers: { ...CLAUDE_CLI_SPOOF_HEADERS }
  },
  models: [
    { id: "claude-opus-4-6", name: "Claude 4.6 Opus" },
    { id: "claude-haiku-4-5-20251001", name: "Claude 4.5 Haiku" },
    { id: "glm-5.1", name: "GLM 5.1" },
    { id: "deepseek-v3.2", name: "DeepSeek V3.2" }
  ]
};
