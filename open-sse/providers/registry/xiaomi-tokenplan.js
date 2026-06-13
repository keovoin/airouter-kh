export default {
  "id": "xiaomi-tokenplan",
  "alias": "xiaomi-tokenplan",
  "transport": {
    "baseUrl": "https://token-plan-sgp.xiaomimimo.com/v1/chat/completions"
  },
  "models": [
    {
      "id": "mimo-v2.5-pro",
      "name": "MiMo V2.5 Pro"
    },
    {
      "id": "mimo-v2.5-pro-claude",
      "name": "MiMo V2.5 Pro (Claude Native)",
      "targetFormat": "claude",
      "upstreamModelId": "mimo-v2.5-pro"
    },
    {
      "id": "mimo-v2.5",
      "name": "MiMo V2.5"
    },
    {
      "id": "mimo-v2-pro",
      "name": "MiMo V2 Pro"
    },
    {
      "id": "mimo-v2-omni",
      "name": "MiMo V2 Omni"
    },
    {
      "id": "mimo-v2-tts",
      "name": "MiMo V2 TTS"
    },
    {
      "id": "mimo-v2.5-tts",
      "name": "MiMo V2.5 TTS"
    },
    {
      "id": "mimo-v2.5-tts-voiceclone",
      "name": "MiMo V2.5 TTS Voice Clone"
    },
    {
      "id": "mimo-v2.5-tts-voicedesign",
      "name": "MiMo V2.5 TTS Voice Design"
    }
  ]
};
