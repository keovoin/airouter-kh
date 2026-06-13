export default {
  "id": "assemblyai",
  "alias": "assemblyai",
  "transport": {
    "baseUrl": "https://api.assemblyai.com/v1/audio/transcriptions"
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
