// Provider transport schema: shared defaults + endpoint defaults + resolver (skeleton, not wired)
import { DEFAULT_RETRY_CONFIG, FETCH_CONNECT_TIMEOUT_MS } from "../config/runtimeConfig.js";

// Shared defaults: provider only overrides fields that differ
export const PROVIDER_DEFAULTS = {
  format: "openai",
  headers: {},
  auth: { header: "Authorization", scheme: "bearer", source: ["accessToken", "apiKey"] },
  retry: DEFAULT_RETRY_CONFIG,
  timeoutMs: FETCH_CONNECT_TIMEOUT_MS,
  executor: "default"
};

// Default endpoints per format (provider only overrides what differs)
export const ENDPOINT_DEFAULTS = {
  openai: { chat: "/chat/completions", test: "/models", models: "/models" },
  claude: { chat: "/messages", test: "/models", countTokens: "/messages/count_tokens" },
  gemini: { chat: "/{model}:streamGenerateContent", models: "/models", test: "/models" }
};

// Deep-merge a provider entry over PROVIDER_DEFAULTS (defensive for missing transport)
export function resolveProvider(entry) {
  const transport = (entry && entry.transport) || {};
  return {
    ...PROVIDER_DEFAULTS,
    ...transport,
    headers: { ...PROVIDER_DEFAULTS.headers, ...transport.headers },
    auth: { ...PROVIDER_DEFAULTS.auth, ...transport.auth },
    retry: { ...PROVIDER_DEFAULTS.retry, ...transport.retry }
  };
}
