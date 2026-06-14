
export default {
  "id": "assemblyai",
  "alias": "assemblyai",
  display: {
      "name": "AssemblyAI",
      "icon": "record_voice_over",
      "color": "#0062FF",
      "textIcon": "AA",
      "website": "https://assemblyai.com",
      "notice": {
          "apiKeyUrl": "https://www.assemblyai.com/app/api-keys"
      }
  },
  category: "apikey",
  uiAlias: "aai",
  authType: "apikey",
  aliases: ["aai"],
  "transport": {
    "baseUrl": "https://api.assemblyai.com/v1/audio/transcriptions",
    "validateUrl": "https://api.assemblyai.com/v1/account"
  },
  media: {
    serviceKinds: ["stt"],
    sttConfig: { baseUrl: "https://api.assemblyai.com/v2/transcript", authType: "apikey", authHeader: "authorization", format: "assemblyai", models: [{ id: "best", name: "Best (Nano + Universal)" }, { id: "nano", name: "Nano (Fast)" }] }
  },
  "models": [
    {
      "id": "universal-3-pro",
      "name": "Universal 3 Pro",
      "type": "stt",
      "params": [
        "language"
      ]
    },
    {
      "id": "universal-2",
      "name": "Universal 2",
      "type": "stt",
      "params": [
        "language"
      ]
    }
  ]
};
