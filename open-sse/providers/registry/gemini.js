import { GOOGLE_OAUTH_CLIENT } from "../shared.js";

export default {
  "id": "gemini",
  "alias": "gemini",
  display: {
      "name": "Gemini",
      "icon": "diamond",
      "color": "#4285F4",
      "textIcon": "GE",
      "website": "https://ai.google.dev",
      "notice": {
          "apiKeyUrl": "https://aistudio.google.com/app/apikey"
      },
      "mediaPriority": 1
  },
  category: "freeTier",
  "transport": {
    "baseUrl": "https://generativelanguage.googleapis.com/v1beta/models",
    "format": "gemini",
    ...GOOGLE_OAUTH_CLIENT,
      auth: {"apiKey":{"header":"x-goog-api-key","scheme":"raw"},"oauth":{"header":"Authorization","scheme":"bearer"}},
  },
  media: {
    serviceKinds: ["llm", "embedding", "image", "imageToText", "webSearch", "tts", "stt"],
    ttsConfig: { baseUrl: "https://generativelanguage.googleapis.com/v1beta/models", authType: "apikey", authHeader: "key", format: "gemini-tts", models: [{ id: "gemini-2.5-flash-preview-tts", name: "Gemini 2.5 Flash TTS" }, { id: "gemini-2.5-pro-preview-tts", name: "Gemini 2.5 Pro TTS" }] },
    sttConfig: { baseUrl: "https://generativelanguage.googleapis.com/v1beta/models", authType: "apikey", authHeader: "key", format: "gemini-stt", models: [{ id: "gemini-2.5-pro", name: "Gemini 2.5 Pro (Best)" }, { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash" }, { id: "gemini-2.5-flash-lite", name: "Gemini 2.5 Flash Lite (Cheapest)" }, { id: "gemini-2.0-flash", name: "Gemini 2.0 Flash" }] },
    embeddingConfig: { baseUrl: "https://generativelanguage.googleapis.com/v1beta/models", authType: "apikey", authHeader: "key", models: [{ id: "text-embedding-004", name: "Text Embedding 004", dimensions: 768 }, { id: "embedding-001", name: "Embedding 001", dimensions: 768 }] },
    searchViaChat: { defaultModel: "gemini-2.5-flash", pricingUrl: "https://ai.google.dev/pricing", freeTier: "Free tier: 15 RPM, 1M tokens/day on gemini-2.5-flash via AI Studio." }
  },
  "models": [
    {
      "id": "gemini-3.1-pro-preview",
      "name": "Gemini 3.1 Pro Preview"
    },
    {
      "id": "gemini-3.1-flash-lite-preview",
      "name": "Gemini 3.1 Flash Lite Preview"
    },
    {
      "id": "gemini-3-flash-preview",
      "name": "Gemini 3 Flash Preview"
    },
    {
      "id": "gemini-2.5-pro",
      "name": "Gemini 2.5 Pro"
    },
    {
      "id": "gemini-2.5-flash",
      "name": "Gemini 2.5 Flash"
    },
    {
      "id": "gemini-2.5-flash-lite",
      "name": "Gemini 2.5 Flash Lite"
    },
    {
      "id": "gemini-2.0-flash",
      "name": "Gemini 2.0 Flash"
    },
    {
      "id": "gemini-2.0-flash-lite",
      "name": "Gemini 2.0 Flash Lite"
    },
    {
      "id": "gemma-4-31b-it",
      "name": "Gemma 4 31B IT"
    },
    {
      "id": "gemini-embedding-2-preview",
      "name": "Gemini Embedding 2 Preview",
      "type": "embedding"
    },
    {
      "id": "gemini-embedding-001",
      "name": "Gemini Embedding 001",
      "type": "embedding"
    },
    {
      "id": "text-embedding-005",
      "name": "Text Embedding 005",
      "type": "embedding"
    },
    {
      "id": "text-embedding-004",
      "name": "Text Embedding 004 (Legacy)",
      "type": "embedding"
    },
    {
      "id": "gemini-3.1-flash-image-preview",
      "name": "Gemini 3.1 Flash Image (Nano Banana 2)",
      "type": "image",
      "params": []
    },
    {
      "id": "gemini-3-pro-image-preview",
      "name": "Gemini 3 Pro Image (Nano Banana Pro)",
      "type": "image",
      "params": []
    },
    {
      "id": "gemini-2.5-flash-image",
      "name": "Gemini 2.5 Flash Image (Nano Banana)",
      "type": "image",
      "params": []
    },
    {
      "id": "gemini-2.5-pro",
      "name": "Gemini 2.5 Pro (Best)",
      "type": "stt",
      "params": [
        "language",
        "prompt"
      ]
    },
    {
      "id": "gemini-2.5-flash",
      "name": "Gemini 2.5 Flash",
      "type": "stt",
      "params": [
        "language",
        "prompt"
      ]
    },
    {
      "id": "gemini-2.5-flash-lite",
      "name": "Gemini 2.5 Flash Lite (Cheapest)",
      "type": "stt",
      "params": [
        "language",
        "prompt"
      ]
    },
    {
      "id": "gemini-2.0-flash",
      "name": "Gemini 2.0 Flash",
      "type": "stt",
      "params": [
        "language",
        "prompt"
      ]
    }
  ],
};
