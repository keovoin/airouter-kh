// Single source: build PROVIDERS + PROVIDER_MODELS from registry/{id}.js (transport + models co-located).
import REGISTRY from "./registry/index.js";
import { PROVIDER_DEFAULTS } from "./schema.js";
import { buildTtsProviderModels } from "../config/ttsModels.js";

// transport: re-apply shared default (format:"openai") like the old defineProviders()
function buildTransport(transport) {
  const t = { ...transport };
  if (!t.format) t.format = PROVIDER_DEFAULTS.format;
  return t;
}

export const PROVIDERS = {};
export const PROVIDER_MODELS = {};
for (const entry of REGISTRY) {
  if (entry.transport) PROVIDERS[entry.id] = buildTransport(entry.transport);
  // models omitted (undefined) → provider has no model list key; [] is a valid explicit empty list
  if (entry.models !== undefined) PROVIDER_MODELS[entry.alias] = entry.models;
}

// TTS model/voice tables keyed by special names (openai-tts-models, ...), not provider ids
Object.assign(PROVIDER_MODELS, buildTtsProviderModels());
