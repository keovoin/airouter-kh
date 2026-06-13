import { platform, arch } from "os";
import { ANTIGRAVITY_OAUTH_CLIENT } from "../shared.js";

export default {
  id: "antigravity",
  alias: "ag",
  transport: {
    baseUrls: [
      "https://daily-cloudcode-pa.googleapis.com",
      "https://daily-cloudcode-pa.sandbox.googleapis.com"
    ],
    format: "antigravity",
    headers: { "User-Agent": `antigravity/1.107.0 ${platform()}/${arch()}` },
    ...ANTIGRAVITY_OAUTH_CLIENT
  },
  models: [
    { id: "gemini-3-flash-agent", name: "Gemini 3.5 Flash (High)" },
    { id: "gemini-3.5-flash-low", name: "Gemini 3.5 Flash (Medium)" },
    { id: "gemini-3.5-flash-extra-low", name: "Gemini 3.5 Flash (Low)" },
    { id: "gemini-pro-agent", name: "Gemini 3.1 Pro (High)" },
    { id: "gemini-3.1-pro-low", name: "Gemini 3.1 Pro (Low)" },
    { id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6 (Thinking)" },
    { id: "claude-opus-4-6-thinking", name: "Claude Opus 4.6 (Thinking)" },
    { id: "gpt-oss-120b-medium", name: "GPT-OSS 120B (Medium)" },
    { id: "gemini-3-flash", name: "Gemini 3 Flash", thinking: false }
  ]
};
