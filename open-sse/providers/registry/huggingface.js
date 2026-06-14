
export default {
  "id": "huggingface",
  "alias": "huggingface",
  display: {
      "name": "HuggingFace",
      "icon": "face",
      "color": "#FFD21E",
      "textIcon": "HF",
      "website": "https://huggingface.co",
      "notice": {
          "apiKeyUrl": "https://huggingface.co/settings/tokens"
      }
  },
  category: "apikey",
  uiAlias: "hf",
  authType: "apikey",
  hiddenKinds: ["tts"],
  aliases: ["hf"],
  "transport": null,
  "models": [
    {
      "id": "black-forest-labs/FLUX.1-schnell",
      "name": "FLUX.1 Schnell",
      "type": "image",
      "params": []
    },
    {
      "id": "stabilityai/stable-diffusion-xl-base-1.0",
      "name": "SDXL Base 1.0",
      "type": "image",
      "params": []
    },
    {
      "id": "openai/whisper-large-v3",
      "name": "Whisper Large v3 (HF)",
      "type": "stt",
      "params": [
        "language"
      ]
    },
    {
      "id": "openai/whisper-small",
      "name": "Whisper Small (HF)",
      "type": "stt",
      "params": [
        "language"
      ]
    }
  ]
};
