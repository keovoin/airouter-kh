
export default {
  "id": "sdwebui",
  "alias": "sdwebui",
  display: {
      "name": "SD WebUI",
      "icon": "brush",
      "color": "#FF7043",
      "textIcon": "SD",
      "website": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
  },
  category: "apikey",
  "transport": null,
  "models": [
    {
      "id": "stable-diffusion-v1-5",
      "name": "Stable Diffusion v1.5",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    },
    {
      "id": "sdxl-base-1.0",
      "name": "SDXL Base 1.0",
      "type": "image",
      "params": [
        "n",
        "size"
      ]
    }
  ]
};
