
export default {
  "id": "mimo-free",
  "alias": "mmf",
  display: {
      "name": "MiMo Code Free",
      "icon": "smart_toy",
      "color": "#FF6900",
      "textIcon": "MF"
  },
  category: "free",
  uiAlias: "mmf",
  noAuth: true,
  passthroughModels: true,
  "transport": {
    "baseUrl": "https://api.xiaomimimo.com/api/free-ai/openai/chat",
    "noAuth": true
  },
  media: {
    noAuth: true,
    passthroughModels: true,
    modelsFetcher: { url: "https://models.dev/api.json", type: "mimo-free" }
  },
  "models": [
    {
      "id": "mimo-auto",
      "name": "MiMo Auto"
    }
  ]
};
