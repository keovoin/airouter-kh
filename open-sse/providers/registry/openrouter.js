
export default {
  "id": "openrouter",
  "alias": "openrouter",
  display: {
      "name": "OpenRouter",
      "icon": "router",
      "color": "#F97316",
      "textIcon": "OR",
      "website": "https://openrouter.ai",
      "notice": {
          "text": "Free tier: 27+ free models, no credit card needed, 200 req/day. After  0 credit: 1,000 req/day.",
          "apiKeyUrl": "https://openrouter.ai/settings/keys"
      }
  },
  category: "freeTier",
  "transport": {
    "baseUrl": "https://openrouter.ai/api/v1/chat/completions",
    "headers": {
      "HTTP-Referer": "https://endpoint-proxy.local",
      "X-Title": "Endpoint Proxy"
    }
  },
  media: {
    serviceKinds: ["llm", "embedding", "tts", "imageToText"],
    embeddingConfig: { baseUrl: "https://openrouter.ai/api/v1/embeddings", authType: "apikey", authHeader: "bearer", headers: { "HTTP-Referer": "https://endpoint-proxy.local", "X-Title": "Endpoint Proxy" }, models: [{ id: "openai/text-embedding-3-small", name: "Text Embedding 3 Small (OpenRouter)", dimensions: 1536 }, { id: "openai/text-embedding-3-large", name: "Text Embedding 3 Large (OpenRouter)", dimensions: 3072 }, { id: "openai/text-embedding-ada-002", name: "Text Embedding Ada 002 (OpenRouter)", dimensions: 1536 }] },
    modelsFetcher: { url: "https://openrouter.ai/api/v1/models", type: "openrouter-free" },
    imageConfig: { baseUrl: "https://openrouter.ai/api/v1/images/generations", headers: { "HTTP-Referer": "https://endpoint-proxy.local", "X-Title": "Endpoint Proxy" } },
    passthroughModels: true
  },
  "models": [
    {
      "id": "openai/text-embedding-3-large",
      "name": "OpenAI Text Embedding 3 Large",
      "type": "embedding"
    },
    {
      "id": "openai/text-embedding-3-small",
      "name": "OpenAI Text Embedding 3 Small",
      "type": "embedding"
    },
    {
      "id": "openai/text-embedding-ada-002",
      "name": "OpenAI Text Embedding Ada 002",
      "type": "embedding"
    },
    {
      "id": "qwen/qwen3-embedding-8b",
      "name": "Qwen3 Embedding 8B",
      "type": "embedding"
    },
    {
      "id": "perplexity/pplx-embed-v1-4b",
      "name": "Perplexity Embed V1 4B",
      "type": "embedding"
    },
    {
      "id": "perplexity/pplx-embed-v1-0.6b",
      "name": "Perplexity Embed V1 0.6B",
      "type": "embedding"
    },
    {
      "id": "nvidia/llama-nemotron-embed-vl-1b-v2:free",
      "name": "NVIDIA Nemotron Embed VL 1B V2 (Free)",
      "type": "embedding"
    },
    {
      "id": "openai/gpt-4o-mini-tts",
      "name": "GPT-4o Mini TTS",
      "type": "tts"
    },
    {
      "id": "openai/tts-1-hd",
      "name": "TTS-1 HD",
      "type": "tts"
    },
    {
      "id": "openai/tts-1",
      "name": "TTS-1",
      "type": "tts"
    },
    {
      "id": "openai/dall-e-3",
      "name": "DALL-E 3 (via OpenRouter)",
      "type": "image",
      "params": [
        "size",
        "quality",
        "style",
        "response_format"
      ]
    },
    {
      "id": "openai/gpt-image-1",
      "name": "GPT Image 1 (via OpenRouter)",
      "type": "image",
      "params": [
        "n",
        "size",
        "quality",
        "response_format"
      ]
    },
    {
      "id": "google/imagen-3.0-generate-002",
      "name": "Imagen 3 (via OpenRouter)",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "black-forest-labs/FLUX.1-schnell",
      "name": "FLUX.1 Schnell (via OpenRouter)",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    }
  ]
};
