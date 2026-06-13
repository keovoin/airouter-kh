import { GOOGLE_OAUTH_CLIENT } from "../shared.js";

export default {
  "id": "gemini",
  "alias": "gemini",
  "transport": {
    "baseUrl": "https://generativelanguage.googleapis.com/v1beta/models",
    "format": "gemini",
    ...GOOGLE_OAUTH_CLIENT
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
  ]
};
