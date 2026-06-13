export default {
  "id": "nscale",
  "alias": "nscale",
  "transport": {
    "baseUrl": "https://inference.api.nscale.com/v1/chat/completions"
  },
  "models": [
    {
      "id": "meta-llama/Llama-3.3-70B-Instruct",
      "name": "Llama 3.3 70B"
    },
    {
      "id": "Qwen/Qwen2.5-Coder-32B-Instruct",
      "name": "Qwen 2.5 Coder 32B"
    }
  ]
};
