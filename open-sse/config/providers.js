// Barrel: PROVIDERS now built from providers/registry (transport co-located with models)
export { PROVIDERS } from "../providers/index.js";

export const OLLAMA_LOCAL_DEFAULT_HOST = "http://localhost:11434";

export function resolveOllamaLocalHost(credentials) {
  const raw = credentials?.providerSpecificData?.baseUrl?.trim();
  return (raw || OLLAMA_LOCAL_DEFAULT_HOST).replace(/\/$/, "");
}

export const XIAOMI_TOKENPLAN_REGIONS = {
  sgp: "https://token-plan-sgp.xiaomimimo.com/v1",
  cn: "https://token-plan-cn.xiaomimimo.com/v1",
  ams: "https://token-plan-ams.xiaomimimo.com/v1"
};
export const XIAOMI_TOKENPLAN_DEFAULT_REGION = "sgp";

export function resolveXiaomiTokenplanBaseUrl(credentials) {
  const region = credentials?.providerSpecificData?.region;
  return XIAOMI_TOKENPLAN_REGIONS[region] || XIAOMI_TOKENPLAN_REGIONS[XIAOMI_TOKENPLAN_DEFAULT_REGION];
}
