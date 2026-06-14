
export default {
  "id": "nanobanana",
  "alias": "nanobanana",
  display: {
      "name": "NanoBanana API",
      "icon": "extension",
      "color": "#FFD700",
      "textIcon": "🍌",
      "website": "https://nanobananaapi.ai",
      "notice": {
          "text": "3rd-party proxy for Google Nano Banana (Gemini 2.5/3 Flash Image). For official, use Gemini provider.",
          "apiKeyUrl": "https://nanobananaapi.ai/dashboard"
      }
  },
  category: "apikey",
  uiAlias: "nb",
  aliases: ["nb"],
  "transport": {
    "baseUrl": "https://api.nanobananaapi.ai/v1/chat/completions",
    "validateUrl": "https://api.nanobananaapi.ai/v1/models"
  },
  "models": [
    {
      "id": "nanobanana-flash",
      "name": "NanoBanana Flash",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "nanobanana-pro",
      "name": "NanoBanana Pro",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    }
  ]
};
