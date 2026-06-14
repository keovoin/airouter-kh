
export default {
  "id": "chutes",
  "alias": "chutes",
  display: {
      "name": "Chutes AI",
      "icon": "water_drop",
      "color": "#ffffffff",
      "textIcon": "CH",
      "website": "https://chutes.ai",
      "notice": {
          "apiKeyUrl": "https://chutes.ai/app/api"
      }
  },
  category: "apikey",
  uiAlias: "ch",
  aliases: ["ch"],
  "transport": {
    "baseUrl": "https://llm.chutes.ai/v1/chat/completions",
    "validateUrl": "https://llm.chutes.ai/v1/models"
  }
};
