
export default {
  "id": "stability-ai",
  "alias": "stability-ai",
  display: {
      "name": "Stability AI",
      "icon": "image",
      "color": "#8B5CF6",
      "textIcon": "SA",
      "website": "https://stability.ai",
      "notice": {
          "apiKeyUrl": "https://platform.stability.ai/account/keys"
      }
  },
  category: "apikey",
  uiAlias: "stability",
  authType: "apikey",
  aliases: ["stability"],
  "transport": null,
  "models": [
    {
      "id": "stable-image-ultra",
      "name": "Stable Image Ultra",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "stable-image-core",
      "name": "Stable Image Core",
      "type": "image",
      "params": [
        "size",
        "style"
      ]
    },
    {
      "id": "sd3.5-large",
      "name": "Stable Diffusion 3.5 Large",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "sd3.5-large-turbo",
      "name": "Stable Diffusion 3.5 Large Turbo",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "sd3.5-medium",
      "name": "Stable Diffusion 3.5 Medium",
      "type": "image",
      "params": [
        "size"
      ]
    }
  ]
};
