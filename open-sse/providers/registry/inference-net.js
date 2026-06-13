export default {
  "id": "inference-net",
  "alias": "inference-net",
  "transport": {
    "baseUrl": "https://api.inference.net/v1/chat/completions"
  },
  "models": [
    {
      "id": "meta-llama/llama-3.3-70b-instruct/fp-16",
      "name": "Llama 3.3 70B"
    },
    {
      "id": "deepseek/deepseek-v3-0324",
      "name": "DeepSeek V3"
    },
    {
      "id": "mistralai/mistral-nemo-12b-instruct/fp-16",
      "name": "Mistral Nemo 12B"
    }
  ]
};
