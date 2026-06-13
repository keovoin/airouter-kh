export default {
  "id": "predibase",
  "alias": "predibase",
  "transport": {
    "baseUrl": "https://serving.app.predibase.com/v1/chat/completions"
  },
  "models": [
    {
      "id": "llama-3-2-3b-instruct",
      "name": "Llama 3.2 3B"
    },
    {
      "id": "llama-3-1-8b-instruct",
      "name": "Llama 3.1 8B"
    },
    {
      "id": "qwen2-5-7b-instruct",
      "name": "Qwen 2.5 7B"
    }
  ]
};
