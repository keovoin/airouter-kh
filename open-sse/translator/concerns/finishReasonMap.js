// Concern #6: finish_reason / stop_reason mapping.
// One entry per direction; switch by special format, default handles common providers.

// upstream finish/stop reason → OpenAI finish_reason
export function toOpenAIFinish(reason, format) {
  switch (format) {
    case "claude":
      switch (reason) {
        case "end_turn": return "stop";
        case "max_tokens": return "length";
        case "tool_use": return "tool_calls";
        case "stop_sequence": return "stop";
        default: return "stop";
      }
    case "commandcode":
      switch (reason) {
        case "stop": return "stop";
        case "length": return "length";
        case "tool-calls":
        case "tool_use": return "tool_calls";
        case "content-filter": return "content_filter";
        case "error": return "stop";
        default: return reason || "stop";
      }
    default:
      return reason || "stop";
  }
}

// OpenAI finish_reason → upstream stop reason
export function fromOpenAIFinish(reason, format) {
  switch (format) {
    case "claude":
      switch (reason) {
        case "stop": return "end_turn";
        case "length": return "max_tokens";
        case "tool_calls": return "tool_use";
        default: return "end_turn";
      }
    default:
      return reason;
  }
}
