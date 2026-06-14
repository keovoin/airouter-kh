
export default {
  "id": "xai",
  "alias": "xai",
  display: {
      "name": "xAI (Grok)",
      "icon": "auto_awesome",
      "color": "#1DA1F2",
      "textIcon": "XA",
      "website": "https://x.ai",
      "notice": {
          "apiKeyUrl": "https://console.x.ai"
      }
  },
  category: "apikey",
  hasOAuth: true,
  authModes: ["oauth","apikey"],
  "transport": {
    "baseUrl": "https://api.x.ai/v1/chat/completions",
    "validateUrl": "https://api.x.ai/v1/models",
    "responsesUrl": "https://api.x.ai/v1/responses",
    "clientId": "b1a00492-073a-47ea-816f-4c329264a828",
    "tokenUrl": "https://auth.x.ai/oauth2/token",
    "refreshUrl": "https://auth.x.ai/oauth2/token"
  },
  media: {
    serviceKinds: ["llm", "imageToText", "webSearch", "image"],
    searchViaChat: { defaultModel: "grok-4.20-reasoning", pricingUrl: "https://x.ai/api#pricing" },
    imageConfig: { baseUrl: "https://api.x.ai/v1/images/generations", bodyFields: ["model", "prompt", "n", "response_format"] },
    authModes: ["oauth", "apikey"],
    hasOAuth: true
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
