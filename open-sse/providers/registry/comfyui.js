
export default {
  "id": "comfyui",
  "alias": "comfyui",
  display: {
      "name": "ComfyUI",
      "icon": "account_tree",
      "color": "#4CAF50",
      "textIcon": "CF",
      "website": "https://github.com/comfyanonymous/ComfyUI"
  },
  category: "apikey",
  "transport": null,
  "models": [
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
      "id": "sdxl",
      "name": "SDXL",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    }
  ]
};
