export default {
  "id": "mistral",
  "alias": "mistral",
  "transport": {
    "baseUrl": "https://api.mistral.ai/v1/chat/completions"
  },
  "models": [
    {
      "id": "mistral-large-latest",
      "name": "Mistral Large 3"
    },
    {
      "id": "codestral-latest",
      "name": "Codestral"
    },
    {
      "id": "mistral-medium-latest",
      "name": "Mistral Medium 3"
    },
    {
      "id": "mistral-embed",
      "name": "Mistral Embed",
      "type": "embedding"
    }
  ]
};
