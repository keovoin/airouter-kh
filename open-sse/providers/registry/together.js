export default {
  "id": "together",
  "alias": "together",
  "transport": {
    "baseUrl": "https://api.together.xyz/v1/chat/completions"
  },
  "models": [
    {
      "id": "meta-llama/Llama-3.3-70B-Instruct-Turbo",
      "name": "Llama 3.3 70B Turbo"
    },
    {
      "id": "deepseek-ai/DeepSeek-R1",
      "name": "DeepSeek R1"
    },
    {
      "id": "Qwen/Qwen3-235B-A22B",
      "name": "Qwen3 235B"
    },
    {
      "id": "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
      "name": "Llama 4 Maverick"
    },
    {
      "id": "BAAI/bge-large-en-v1.5",
      "name": "BGE Large EN v1.5",
      "type": "embedding"
    },
    {
      "id": "togethercomputer/m2-bert-80M-8k-retrieval",
      "name": "M2 BERT 80M 8K",
      "type": "embedding"
    }
  ]
};
