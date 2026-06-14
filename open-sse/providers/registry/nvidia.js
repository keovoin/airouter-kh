
export default {
  "id": "nvidia",
  "alias": "nvidia",
  display: {
      "name": "NVIDIA NIM",
      "icon": "developer_board",
      "color": "#76B900",
      "textIcon": "NV",
      "website": "https://developer.nvidia.com/nim",
      "notice": {
          "text": "Free access for NVIDIA Developer Program members (prototyping & testing).",
          "apiKeyUrl": "https://build.nvidia.com/settings/api-keys"
      }
  },
  category: "freeTier",
  "transport": {
    "baseUrl": "https://integrate.api.nvidia.com/v1/chat/completions",
    "validateUrl": "https://integrate.api.nvidia.com/v1/models"
  },
  media: {
    serviceKinds: ["llm", "tts", "embedding"],
    ttsConfig: { baseUrl: "https://integrate.api.nvidia.com/v1/audio/speech", authType: "apikey", authHeader: "bearer", format: "nvidia-tts", models: [{ id: "fastpitch", name: "FastPitch" }, { id: "tacotron2", name: "Tacotron2" }] },
    embeddingConfig: { baseUrl: "https://integrate.api.nvidia.com/v1/embeddings", authType: "apikey", authHeader: "bearer", models: [{ id: "nvidia/nv-embedqa-e5-v5", name: "NV EmbedQA E5 v5", dimensions: 1024 }] }
  },
  "models": [
    {
      "id": "minimaxai/minimax-m2.7",
      "name": "Minimax M2.7"
    },
    {
      "id": "z-ai/glm4.7",
      "name": "GLM 4.7"
    },
    {
      "id": "nvidia/nv-embedqa-e5-v5",
      "name": "NV EmbedQA E5 v5",
      "type": "embedding"
    },
    {
      "id": "nvidia/parakeet-ctc-1.1b-asr",
      "name": "Parakeet CTC 1.1B",
      "type": "stt",
      "params": [
        "language"
      ]
    }
  ]
};
