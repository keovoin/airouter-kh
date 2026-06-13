// Model schema (Mongoose-lite): central defaults + normalizer + 3-tier resolver (skeleton, not wired)

// Centralized model defaults (caps declares positive capabilities)
export const MODEL_DEFAULTS = {
  type: "llm",
  quotaFamily: "normal",
  strip: [],
  targetFormat: null,
  caps: { vision: false, audioIn: false, thinking: false }
};

// Normalize a raw model entry over defaults (deep-merge caps)
export function normalizeModel(raw) {
  return {
    ...MODEL_DEFAULTS,
    ...raw,
    caps: { ...MODEL_DEFAULTS.caps, ...raw.caps },
    upstreamModelId: raw.upstreamModelId || raw.id
  };
}

// 3-tier fallback: defaults -> catalog canonical -> provider inline override (wins)
export function resolveModel(catalog, ref) {
  const raw = typeof ref === "string" ? { id: ref } : ref;
  return {
    ...MODEL_DEFAULTS,
    ...catalog[raw.id],
    ...raw,
    caps: { ...MODEL_DEFAULTS.caps, ...catalog[raw.id]?.caps, ...raw.caps },
    upstreamModelId: raw.upstreamModelId || catalog[raw.id]?.upstreamModelId || raw.id
  };
}
