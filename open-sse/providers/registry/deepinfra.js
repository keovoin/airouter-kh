export default {
  "id": "deepinfra",
  "alias": "deepinfra",
  "transport": {
    "baseUrl": "https://api.deepinfra.com/v1/openai/chat/completions"
  },
  "models": [
    {
      "id": "meta-llama/Meta-Llama-3.1-70B-Instruct",
      "name": "Llama 3.1 70B"
    },
    {
      "id": "deepseek-ai/DeepSeek-V3",
      "name": "DeepSeek V3"
    },
    {
      "id": "Qwen/Qwen2.5-72B-Instruct",
      "name": "Qwen 2.5 72B"
    }
  ]
};
