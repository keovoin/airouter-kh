
export default {
  "id": "opencode",
  "alias": "oc",
  display: {
      "name": "OpenCode Free",
      "icon": "terminal",
      "color": "#E87040",
      "textIcon": "OC"
  },
  category: "free",
  uiAlias: "oc",
  noAuth: true,
  passthroughModels: true,
  "transport": {
    "baseUrl": "https://opencode.ai",
    "headers": {
      "x-opencode-client": "desktop"
    },
    "noAuth": true
  },
  media: {
    noAuth: true,
    passthroughModels: true,
    modelsFetcher: { url: "https://opencode.ai/zen/v1/models", type: "opencode-free" }
  },
  "models": []
};
