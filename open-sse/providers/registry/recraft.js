
export default {
  "id": "recraft",
  "alias": "recraft",
  display: {
      "name": "Recraft",
      "icon": "image",
      "color": "#EC4899",
      "textIcon": "RC",
      "website": "https://recraft.ai",
      "notice": {
          "apiKeyUrl": "https://www.recraft.ai/profile/api"
      }
  },
  category: "apikey",
  authType: "apikey",
  "transport": null,
  "models": [
    {
      "id": "recraftv3",
      "name": "Recraft V3",
      "type": "image",
      "params": [
        "n",
        "size",
        "style"
      ]
    },
    {
      "id": "recraftv2",
      "name": "Recraft V2",
      "type": "image",
      "params": [
        "n",
        "size",
        "style"
      ]
    }
  ]
};
