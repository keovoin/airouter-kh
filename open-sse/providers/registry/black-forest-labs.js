
export default {
  "id": "black-forest-labs",
  "alias": "black-forest-labs",
  display: {
      "name": "Black Forest Labs",
      "icon": "image",
      "color": "#111827",
      "textIcon": "BF",
      "website": "https://blackforestlabs.ai",
      "notice": {
          "apiKeyUrl": "https://api.bfl.ai"
      }
  },
  category: "apikey",
  uiAlias: "bfl",
  authType: "apikey",
  aliases: ["bfl"],
  "transport": null,
  "models": [
    {
      "id": "flux-pro-1.1",
      "name": "FLUX Pro 1.1",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "flux-pro-1.1-ultra",
      "name": "FLUX Pro 1.1 Ultra",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "flux-pro",
      "name": "FLUX Pro",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "flux-dev",
      "name": "FLUX Dev",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "flux-kontext-pro",
      "name": "FLUX Kontext Pro (Edit)",
      "type": "image",
      "params": [
        "size"
      ],
      "capabilities": [
        "edit"
      ]
    },
    {
      "id": "flux-kontext-max",
      "name": "FLUX Kontext Max (Edit)",
      "type": "image",
      "params": [
        "size"
      ],
      "capabilities": [
        "edit"
      ]
    }
  ]
};
