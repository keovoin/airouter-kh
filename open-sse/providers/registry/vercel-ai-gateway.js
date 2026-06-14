
export default {
  "id": "vercel-ai-gateway",
  "alias": "vercel-ai-gateway",
  display: {
      "name": "Vercel AI Gateway",
      "icon": "deployed_code",
      "color": "#111827",
      "textIcon": "VG",
      "website": "https://vercel.com/ai-gateway",
      "notice": {
          "text": "Unified OpenAI-compatible endpoint from Vercel. Use your AI Gateway API key, then pick models with provider/model IDs like anthropic/claude-sonnet-4.6 or openai/gpt-5.4.",
          "apiKeyUrl": "https://vercel.com/dashboard/~/ai-gateway"
      }
  },
  category: "apikey",
  uiAlias: "vercel",
  passthroughModels: true,
  aliases: ["vercel"],
  "transport": {
    "baseUrl": "https://ai-gateway.vercel.sh/v1/chat/completions",
    "retry": {
      "429": 2
    },
    usage: { url: "https://ai-gateway.vercel.sh/v1/credits" }
  },
  media: {
    serviceKinds: ["llm", "embedding", "image", "imageToText", "webSearch"],
    searchViaChat: { defaultModel: "openai/gpt-4o-mini", pricingUrl: "https://vercel.com/docs/ai-gateway/pricing" },
    modelsFetcher: { url: "https://ai-gateway.vercel.sh/v1/models", type: "openai" },
    imageConfig: { baseUrl: "https://ai-gateway.vercel.sh/v1/images/generations" },
    embeddingConfig: { baseUrl: "https://ai-gateway.vercel.sh/v1/embeddings" },
    passthroughModels: true
  },
  features: {"usage":true,"usageApikey":true},
};
