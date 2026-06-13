// Build OpenAI delta carrying reasoning_content (optional leading assistant role)
export function reasoningDelta(text, withRole = false) {
  return withRole
    ? { role: "assistant", reasoning_content: text }
    : { reasoning_content: text };
}
