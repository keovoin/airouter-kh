// Model defaults centralized (was scattered as `m.type || "llm"`, `quotaFamily || "normal"`, etc.)
export const MODEL_DEFAULTS = {
  type: "llm",
  quotaFamily: "normal",
  strip: [],
  targetFormat: null
};

// Resolve a single field with its default (keeps accessor call-sites one-liners)
export function modelType(model) {
  return model?.type || MODEL_DEFAULTS.type;
}
export function modelQuotaFamily(model) {
  return model?.quotaFamily || MODEL_DEFAULTS.quotaFamily;
}
export function modelStrip(model) {
  return model?.strip || [];
}
export function modelTargetFormat(model) {
  return model?.targetFormat || MODEL_DEFAULTS.targetFormat;
}
