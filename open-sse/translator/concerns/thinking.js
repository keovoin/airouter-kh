// Concern: reasoning_effort ↔ provider-native thinking config.
// Each provider expresses "how much to think" differently — centralize the maps here.
// Streaming reasoning delta shape lives in reasoning.js; this file is request-side config only.

// OpenAI reasoning_effort → Claude thinking.budget_tokens
const EFFORT_TO_BUDGET = { none: 0, low: 4096, medium: 8192, high: 16384, xhigh: 32768 };

// Returns budget_tokens for a reasoning_effort, or undefined if unknown effort.
// 0 means "no thinking" (caller skips enabling); undefined means "effort not recognized".
export function effortToBudget(effort) {
  if (!effort) return undefined;
  return EFFORT_TO_BUDGET[String(effort).toLowerCase()];
}

// OpenAI reasoning_effort → Gemini thinkingLevel (gemini-3 enum: minimal|low|medium|high).
// Gemini 3 cannot fully disable thinking; "none"/"off" map to "minimal" (closest to off).
export function effortToThinkingLevel(effort) {
  const e = String(effort).toLowerCase().trim();
  return e === "none" || e === "off" ? "minimal" : e;
}

// Gemini thinkingBudget (numeric) → OpenAI reasoning_effort (antigravity reverse map).
// Returns null when budget <= 0 (no reasoning).
export function budgetToEffort(budget) {
  if (!budget || budget <= 0) return null;
  if (budget <= 2048) return "low";
  if (budget <= 16384) return "medium";
  return "high";
}
