export default {
  "id": "nvidia",
  "alias": "nvidia",
  "transport": {
    "baseUrl": "https://integrate.api.nvidia.com/v1/chat/completions"
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
