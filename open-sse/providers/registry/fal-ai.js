
export default {
  "id": "fal-ai",
  "alias": "fal-ai",
  display: {
    "name": "Fal.ai",
    "icon": "image",
    "color": "#2563EB",
    "textIcon": "FL",
    "website": "https://fal.ai",
    "notice": {
      "apiKeyUrl": "https://fal.ai/dashboard/keys"
    }
  },
  category: "apikey",
  uiAlias: "fal",
  authType: "apikey",
  aliases: ["fal"],
  "transport": null,
  "models": [
    {
      "id": "fal-ai/flux/schnell",
      "name": "FLUX Schnell",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "fal-ai/flux/dev",
      "name": "FLUX Dev",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "fal-ai/flux-pro/v1.1",
      "name": "FLUX Pro v1.1",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "fal-ai/flux-pro/v1.1-ultra",
      "name": "FLUX Pro v1.1 Ultra",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "fal-ai/recraft-v3",
      "name": "Recraft V3",
      "type": "image",
      "params": [
        "n",
        "size",
        "style"
      ]
    },
    {
      "id": "fal-ai/ideogram/v2",
      "name": "Ideogram V2",
      "type": "image",
      "params": [
        "n",
        "size",
        "style"
      ]
    },
    {
      "id": "fal-ai/stable-diffusion-v35-large",
      "name": "SD 3.5 Large",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    }
  ]
};
