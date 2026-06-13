import { register } from "../index.js";
import { FORMATS } from "../formats.js";
import { buildChunk } from "../helpers/chunkBuilder.js";
import { buildUsage } from "../helpers/usageHelper.js";

// Build chunk meta for current gemini state
function chunkMeta(state) {
  return { id: `chatcmpl-${state.messageId}`, created: Math.floor(Date.now() / 1000), model: state.model };
}

// Convert Gemini response chunk to OpenAI format
export function geminiToOpenAIResponse(chunk, state) {
  if (!chunk) return null;
  
  // Handle Antigravity wrapper
  const response = chunk.response || chunk;
  if (!response || !response.candidates?.[0]) return null;

  const results = [];
  const candidate = response.candidates[0];
  const content = candidate.content;

  // Initialize state
  if (!state.messageId) {
    state.messageId = response.responseId || `msg_${Date.now()}`;
    state.model = response.modelVersion || "gemini";
    state.functionIndex = 0;
    results.push(buildChunk(chunkMeta(state), { role: "assistant" }, null));
  }

  // Process parts
  if (content?.parts) {
    for (const part of content.parts) {
      const hasThoughtSig = part.thoughtSignature || part.thought_signature;
      const isThought = part.thought === true;
      
      // Handle thought signature (thinking mode)
      if (hasThoughtSig) {
        const hasTextContent = part.text !== undefined && part.text !== "";
        const hasFunctionCall = !!part.functionCall;
        
        if (hasTextContent) {
          results.push(buildChunk(
            chunkMeta(state),
            isThought ? { reasoning_content: part.text } : { content: part.text },
            null
          ));
        }
        
        if (hasFunctionCall) {
          const rawName = part.functionCall.name;
          // Restore original tool name from mapping (AG cloaking)
          const fcName = state.toolNameMap?.get(rawName) || rawName;
          const fcArgs = part.functionCall.args || {};
          const toolCallIndex = state.functionIndex++;
          
          const toolCall = {
            id: `${fcName}-${Date.now()}-${toolCallIndex}`,
            index: toolCallIndex,
            type: "function",
            function: {
              name: fcName,
              arguments: JSON.stringify(fcArgs)
            }
          };
          
          state.toolCalls.set(toolCallIndex, toolCall);
          
          results.push(buildChunk(chunkMeta(state), { tool_calls: [toolCall] }, null));
        }
        continue;
      }

      // Text content. Gemini marks model-internal thinking with `thought: true`.
      // Some responses include a thoughtSignature, but Google AI Studio/Gemini API
      // can also stream thought parts without a signature; those must not be
      // surfaced as normal assistant content in OpenAI-compatible clients.
      if (part.text !== undefined && part.text !== "") {
        results.push(buildChunk(
          chunkMeta(state),
          isThought ? { reasoning_content: part.text } : { content: part.text },
          null
        ));
      }

      // Function call
      if (part.functionCall) {
        const rawName = part.functionCall.name;
        // Restore original tool name from mapping (AG cloaking)
        const fcName = state.toolNameMap?.get(rawName) || rawName;
        const fcArgs = part.functionCall.args || {};
        const toolCallIndex = state.functionIndex++;
        
        const toolCall = {
          id: `${fcName}-${Date.now()}-${toolCallIndex}`,
          index: toolCallIndex,
          type: "function",
          function: {
            name: fcName,
            arguments: JSON.stringify(fcArgs)
          }
        };
        
        state.toolCalls.set(toolCallIndex, toolCall);
        
        results.push(buildChunk(chunkMeta(state), { tool_calls: [toolCall] }, null));
      }

      // Inline data (images)
      const inlineData = part.inlineData || part.inline_data;
      if (inlineData?.data) {
        const mimeType = inlineData.mimeType || inlineData.mime_type || "image/png";
        results.push(buildChunk(
          chunkMeta(state),
          {
            images: [{
              type: "image_url",
              image_url: { url: `data:${mimeType};base64,${inlineData.data}` }
            }]
          },
          null
        ));
      }
    }
  }

  // Usage metadata - extract before finish reason so we can include it
  const usageMeta = response.usageMetadata || chunk.usageMetadata;
  if (usageMeta && typeof usageMeta === "object") {
    const cachedTokens = typeof usageMeta.cachedContentTokenCount === "number" ? usageMeta.cachedContentTokenCount : 0;
    const promptTokenCountRaw = typeof usageMeta.promptTokenCount === "number" ? usageMeta.promptTokenCount : 0;
    const thoughtsTokens = typeof usageMeta.thoughtsTokenCount === "number" ? usageMeta.thoughtsTokenCount : 0;
    let candidatesTokens = typeof usageMeta.candidatesTokenCount === "number" ? usageMeta.candidatesTokenCount : 0;
    const totalTokens = typeof usageMeta.totalTokenCount === "number" ? usageMeta.totalTokenCount : 0;
    
    // prompt_tokens = promptTokenCount (includes cached tokens, matching claude-to-openai.js behavior)
    const promptTokens = promptTokenCountRaw;
    
    // Fallback calculation if candidatesTokenCount is 0 but totalTokenCount exists
    if (candidatesTokens === 0 && totalTokens > 0) {
      candidatesTokens = totalTokens - promptTokenCountRaw - thoughtsTokens;
      if (candidatesTokens < 0) candidatesTokens = 0;
    }
    
    // completion_tokens = candidatesTokenCount + thoughtsTokenCount (match Go code)
    const completionTokens = candidatesTokens + thoughtsTokens;
    
    state.usage = buildUsage({ promptTokens, completionTokens, totalTokens, cachedTokens, reasoningTokens: thoughtsTokens });
  }

  // Finish reason - include usage in final chunk
  if (candidate.finishReason) {
    let finishReason = candidate.finishReason.toLowerCase();
    if (finishReason === "stop" && state.toolCalls.size > 0) {
      finishReason = "tool_calls";
    }
    
    const finalChunk = buildChunk(chunkMeta(state), {}, finishReason);
    
    // Include usage in final chunk for downstream translators
    if (state.usage) {
      finalChunk.usage = state.usage;
    }
    
    results.push(finalChunk);
    state.finishReason = finishReason;
  }

  return results.length > 0 ? results : null;
}

// Register
register(FORMATS.GEMINI, FORMATS.OPENAI, null, geminiToOpenAIResponse);
register(FORMATS.GEMINI_CLI, FORMATS.OPENAI, null, geminiToOpenAIResponse);
register(FORMATS.ANTIGRAVITY, FORMATS.OPENAI, null, geminiToOpenAIResponse);
register(FORMATS.VERTEX, FORMATS.OPENAI, null, geminiToOpenAIResponse);

