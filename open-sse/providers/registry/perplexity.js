
export default {
  "id": "perplexity",
  "alias": "perplexity",
  display: {
      "name": "Perplexity",
      "icon": "search",
      "color": "#20808D",
      "textIcon": "PP",
      "website": "https://www.perplexity.ai",
      "notice": {
          "apiKeyUrl": "https://www.perplexity.ai/settings/api"
      }
  },
  category: "apikey",
  uiAlias: "pplx",
  authType: "apikey",
  aliases: ["pplx"],
  "transport": {
    "baseUrl": "https://api.perplexity.ai/chat/completions",
    "validateUrl": "https://api.perplexity.ai/models"
  },
  media: {
    serviceKinds: ["llm", "webSearch"],
    searchViaChat: { defaultModel: "sonar", pricingUrl: "https://docs.perplexity.ai/guides/pricing" }
  },
  "models": [
    {
      "id": "sonar-pro",
      "name": "Sonar Pro"
    },
    {
      "id": "sonar",
      "name": "Sonar"
    }
  ]
};
