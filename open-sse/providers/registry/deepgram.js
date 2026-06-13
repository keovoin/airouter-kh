export default {
  "id": "deepgram",
  "alias": "deepgram",
  "transport": {
    "baseUrl": "https://api.deepgram.com/v1/listen"
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
