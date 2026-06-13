export default {
  "id": "nanobanana",
  "alias": "nanobanana",
  "transport": {
    "baseUrl": "https://api.nanobananaapi.ai/v1/chat/completions"
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
