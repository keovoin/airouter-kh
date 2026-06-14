import { deriveModelName } from "./namePatterns.js";

// Model defaults centralized (was scattered as `m.type || "llm"`, `quotaFamily || "normal"`, etc.)
export const MODEL_DEFAULTS = {
  type: "llm",
  quotaFamily: "normal",
  strip: [],
  targetFormat: null
};

// Normalize a registry model entry: accept terse "id" string, fill name via regex when omitted.
// Override always wins (raw spread last); name falls back to regex → id.
export function normalizeModel(raw) {
  const model = typeof raw === "string" ? { id: raw } : raw;
  if (model.name !== undefined) return model;
  return { ...model, name: deriveModelName(model.id) };
}

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
