
export default {
  "id": "voyage-ai",
  "alias": "voyage-ai",
  display: {
      "name": "Voyage AI",
      "icon": "data_array",
      "color": "#0EA5E9",
      "textIcon": "VG",
      "website": "https://www.voyageai.com",
      "notice": {
          "apiKeyUrl": "https://dash.voyageai.com/api-keys"
      }
  },
  category: "apikey",
  uiAlias: "voyage",
  authType: "apikey",
  "transport": null,
  "models": [
    {
      "id": "voyage-3-large",
      "name": "Voyage 3 Large",
      "type": "embedding"
    },
    {
      "id": "voyage-3.5",
      "name": "Voyage 3.5",
      "type": "embedding"
    },
    {
      "id": "voyage-3.5-lite",
      "name": "Voyage 3.5 Lite",
      "type": "embedding"
    },
    {
      "id": "voyage-code-3",
      "name": "Voyage Code 3",
      "type": "embedding"
    },
    {
      "id": "voyage-finance-2",
      "name": "Voyage Finance 2",
      "type": "embedding"
    },
    {
      "id": "voyage-law-2",
      "name": "Voyage Law 2",
      "type": "embedding"
    },
    {
      "id": "voyage-multilingual-2",
      "name": "Voyage Multilingual 2",
      "type": "embedding"
    }
  ]
};
