export default {
  "id": "xai",
  "alias": "xai",
  "transport": {
    "baseUrl": "https://api.x.ai/v1/chat/completions",
    "responsesUrl": "https://api.x.ai/v1/responses",
    "clientId": "b1a00492-073a-47ea-816f-4c329264a828",
    "tokenUrl": "https://auth.x.ai/oauth2/token",
    "refreshUrl": "https://auth.x.ai/oauth2/token"
  },
  "models": [
    {
      "id": "grok-4",
      "name": "Grok 4"
    },
    {
      "id": "grok-4-fast-reasoning",
      "name": "Grok 4 Fast Reasoning"
    },
    {
      "id": "grok-code-fast-1",
      "name": "Grok Code Fast"
    },
    {
      "id": "grok-3",
      "name": "Grok 3"
    },
    {
      "id": "grok-2-image-1212",
      "name": "Grok 2 Image",
      "type": "image",
      "params": [
        "n",
        "response_format"
      ]
    }
  ]
};
