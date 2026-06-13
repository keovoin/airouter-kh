export default {
  "id": "nebius",
  "alias": "nebius",
  "transport": {
    "baseUrl": "https://api.studio.nebius.ai/v1/chat/completions"
  },
  "models": [
    {
      "id": "meta-llama/Llama-3.3-70B-Instruct",
      "name": "Llama 3.3 70B Instruct"
    },
    {
      "id": "Qwen/Qwen3-Embedding-8B",
      "name": "Qwen3 Embedding 8B",
      "type": "embedding"
    }
  ]
};
