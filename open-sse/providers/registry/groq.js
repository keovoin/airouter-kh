
export default {
  "id": "groq",
  "alias": "groq",
  display: {
      "name": "Groq",
      "icon": "speed",
      "color": "#F55036",
      "textIcon": "GQ",
      "website": "https://groq.com",
      "notice": {
          "apiKeyUrl": "https://console.groq.com/keys"
      }
  },
  category: "apikey",
  "transport": {
    "baseUrl": "https://api.groq.com/openai/v1/chat/completions",
    "validateUrl": "https://api.groq.com/openai/v1/models"
  },
  media: {
    serviceKinds: ["llm", "imageToText", "stt"],
    sttConfig: { baseUrl: "https://api.groq.com/openai/v1/audio/transcriptions", authType: "apikey", authHeader: "bearer", format: "openai", models: [{ id: "whisper-large-v3", name: "Whisper Large v3" }, { id: "whisper-large-v3-turbo", name: "Whisper Large v3 Turbo" }, { id: "distil-whisper-large-v3-en", name: "Distil Whisper Large v3 EN" }] }
  },
  "models": [
    {
      "id": "llama-3.3-70b-versatile",
      "name": "Llama 3.3 70B"
    },
    {
      "id": "meta-llama/llama-4-maverick-17b-128e-instruct",
      "name": "Llama 4 Maverick"
    },
    {
      "id": "qwen/qwen3-32b",
      "name": "Qwen3 32B"
    },
    {
      "id": "openai/gpt-oss-120b",
      "name": "GPT-OSS 120B"
    },
    {
      "id": "whisper-large-v3",
      "name": "Whisper Large v3",
      "type": "stt",
      "params": [
        "language",
        "response_format",
        "temperature",
        "prompt"
      ]
    },
    {
      "id": "whisper-large-v3-turbo",
      "name": "Whisper Large v3 Turbo",
      "type": "stt",
      "params": [
        "language",
        "response_format",
        "temperature",
        "prompt"
      ]
    },
    {
      "id": "distil-whisper-large-v3-en",
      "name": "Distil Whisper Large v3 EN",
      "type": "stt",
      "params": [
        "language",
        "response_format",
        "temperature",
        "prompt"
      ]
    }
  ]
};
