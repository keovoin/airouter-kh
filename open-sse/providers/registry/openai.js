export default {
  "id": "openai",
  "alias": "openai",
  display: {
      "name": "OpenAI",
      "icon": "auto_awesome",
      "color": "#10A37F",
      "textIcon": "OA",
      "website": "https://platform.openai.com",
      "notice": {
          "apiKeyUrl": "https://platform.openai.com/api-keys"
      }
  },
  category: "apikey",
  thinkingConfig: {"options":["auto","none","low","medium","high"],"defaultMode":"auto"},
  "transport": {
    "baseUrl": "https://api.openai.com/v1/chat/completions",
    "forceStream": true
  },
  media: {
    serviceKinds: ["llm", "embedding", "tts", "stt", "image", "imageToText", "webSearch"],
    ttsConfig: { baseUrl: "https://api.openai.com/v1/audio/speech", authType: "apikey", authHeader: "bearer", format: "openai", defaultModel: "gpt-4o-mini-tts", models: [{ id: "tts-1", name: "TTS-1" }, { id: "tts-1-hd", name: "TTS-1 HD" }, { id: "gpt-4o-mini-tts", name: "GPT-4o Mini TTS" }] },
    sttConfig: { baseUrl: "https://api.openai.com/v1/audio/transcriptions", authType: "apikey", authHeader: "bearer", format: "openai", models: [{ id: "whisper-1", name: "Whisper 1" }, { id: "gpt-4o-transcribe", name: "GPT-4o Transcribe" }, { id: "gpt-4o-mini-transcribe", name: "GPT-4o Mini Transcribe" }] },
    embeddingConfig: { baseUrl: "https://api.openai.com/v1/embeddings", authType: "apikey", authHeader: "bearer", models: [{ id: "text-embedding-3-small", name: "Text Embedding 3 Small", dimensions: 1536 }, { id: "text-embedding-3-large", name: "Text Embedding 3 Large", dimensions: 3072 }, { id: "text-embedding-ada-002", name: "Text Embedding Ada 002", dimensions: 1536 }] },
    imageConfig: { baseUrl: "https://api.openai.com/v1/images/generations" },
    searchViaChat: { defaultModel: "gpt-4o-mini", pricingUrl: "https://openai.com/api/pricing" }
  },
  "models": [
    {
      "id": "gpt-5.4",
      "name": "GPT-5.4"
    },
    {
      "id": "gpt-5.4-mini",
      "name": "GPT-5.4 Mini"
    },
    {
      "id": "gpt-5.4-nano",
      "name": "GPT-5.4 Nano"
    },
    {
      "id": "gpt-5.2",
      "name": "GPT-5.2"
    },
    {
      "id": "gpt-5.1",
      "name": "GPT-5.1"
    },
    {
      "id": "gpt-5",
      "name": "GPT-5"
    },
    {
      "id": "gpt-5-mini",
      "name": "GPT-5 Mini"
    },
    {
      "id": "gpt-5-nano",
      "name": "GPT-5 Nano"
    },
    {
      "id": "gpt-4o",
      "name": "GPT-4o"
    },
    {
      "id": "gpt-4o-mini",
      "name": "GPT-4o Mini"
    },
    {
      "id": "gpt-4-turbo",
      "name": "GPT-4 Turbo"
    },
    {
      "id": "gpt-4.1",
      "name": "GPT-4.1"
    },
    {
      "id": "gpt-4.1-mini",
      "name": "GPT-4.1 Mini"
    },
    {
      "id": "gpt-4.1-nano",
      "name": "GPT-4.1 Nano"
    },
    {
      "id": "o3",
      "name": "O3"
    },
    {
      "id": "o3-mini",
      "name": "O3 Mini"
    },
    {
      "id": "o3-pro",
      "name": "O3 Pro"
    },
    {
      "id": "o4-mini",
      "name": "O4 Mini"
    },
    {
      "id": "o1",
      "name": "O1"
    },
    {
      "id": "o1-mini",
      "name": "O1 Mini"
    },
    {
      "id": "text-embedding-3-large",
      "name": "Text Embedding 3 Large",
      "type": "embedding"
    },
    {
      "id": "text-embedding-3-small",
      "name": "Text Embedding 3 Small",
      "type": "embedding"
    },
    {
      "id": "text-embedding-ada-002",
      "name": "Text Embedding Ada 002",
      "type": "embedding"
    },
    {
      "id": "tts-1",
      "name": "TTS-1",
      "type": "tts"
    },
    {
      "id": "tts-1-hd",
      "name": "TTS-1 HD",
      "type": "tts"
    },
    {
      "id": "gpt-4o-mini-tts",
      "name": "GPT-4o Mini TTS",
      "type": "tts"
    },
    {
      "id": "whisper-1",
      "name": "Whisper 1",
      "type": "stt",
      "params": [
        "language",
        "response_format",
        "temperature",
        "prompt"
      ]
    },
    {
      "id": "gpt-4o-transcribe",
      "name": "GPT-4o Transcribe",
      "type": "stt",
      "params": [
        "language",
        "response_format",
        "temperature",
        "prompt"
      ]
    },
    {
      "id": "gpt-4o-mini-transcribe",
      "name": "GPT-4o Mini Transcribe",
      "type": "stt",
      "params": [
        "language",
        "response_format",
        "temperature",
        "prompt"
      ]
    },
    {
      "id": "gpt-image-1",
      "name": "GPT Image 1",
      "type": "image",
      "params": [
        "n",
        "size",
        "quality",
        "response_format"
      ]
    },
    {
      "id": "dall-e-3",
      "name": "DALL-E 3",
      "type": "image",
      "params": [
        "size",
        "quality",
        "style",
        "response_format"
      ]
    },
    {
      "id": "dall-e-2",
      "name": "DALL-E 2",
      "type": "image",
      "params": [
        "n",
        "size",
        "response_format"
      ]
    }
  ]
};
