export default {
  "id": "fireworks",
  "alias": "fireworks",
  "transport": {
    "baseUrl": "https://api.fireworks.ai/inference/v1/chat/completions"
  },
  "models": [
    {
      "id": "accounts/fireworks/models/deepseek-v3p1",
      "name": "DeepSeek V3.1"
    },
    {
      "id": "accounts/fireworks/models/llama-v3p3-70b-instruct",
      "name": "Llama 3.3 70B"
    },
    {
      "id": "accounts/fireworks/models/qwen3-235b-a22b",
      "name": "Qwen3 235B"
    },
    {
      "id": "nomic-ai/nomic-embed-text-v1.5",
      "name": "Nomic Embed Text v1.5",
      "type": "embedding"
    }
  ]
};
