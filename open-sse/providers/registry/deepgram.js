
export default {
  "id": "deepgram",
  "alias": "deepgram",
  display: {
      "name": "Deepgram",
      "icon": "mic",
      "color": "#13EF93",
      "textIcon": "DG",
      "website": "https://deepgram.com",
      "notice": {
          "text": "$200 free credit on signup (no card required). Aura-1: $0.015/1k chars, Aura-2: $0.030/1k chars (Pay-As-You-Go).",
          "apiKeyUrl": "https://console.deepgram.com/api-keys"
      }
  },
  category: "apikey",
  uiAlias: "dg",
  authType: "apikey",
  aliases: ["dg"],
  "transport": {
    "baseUrl": "https://api.deepgram.com/v1/listen"
  },
  media: {
    serviceKinds: ["stt"],
    sttConfig: { baseUrl: "https://api.deepgram.com/v1/listen", authType: "apikey", authHeader: "token", format: "deepgram", models: [{ id: "nova-3", name: "Nova 3" }, { id: "nova-2", name: "Nova 2" }, { id: "nova", name: "Nova" }] }
  },
  "models": [
    {
      "id": "nova-3",
      "name": "Nova 3",
      "type": "stt",
      "params": [
        "language"
      ]
    },
    {
      "id": "nova-2",
      "name": "Nova 2",
      "type": "stt",
      "params": [
        "language"
      ]
    },
    {
      "id": "whisper-large",
      "name": "Whisper Large",
      "type": "stt",
      "params": [
        "language"
      ]
    }
  ]
};
