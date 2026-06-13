export default {
  "id": "qwen",
  "alias": "qw",
  "transport": {
    "baseUrl": "https://portal.qwen.ai/v1/chat/completions",
    "clientId": "f0304373b74a44d2b584a3fb70ca9e56",
    "tokenUrl": "https://chat.qwen.ai/api/v1/oauth2/token",
    "authUrl": "https://chat.qwen.ai/api/v1/oauth2/device/code"
  },
  "models": [
    {
      "id": "qwen3-coder-plus",
      "name": "Qwen3 Coder Plus"
    },
    {
      "id": "qwen3-coder-flash",
      "name": "Qwen3 Coder Flash"
    },
    {
      "id": "vision-model",
      "name": "Qwen3 Vision Model"
    },
    {
      "id": "coder-model",
      "name": "Qwen3.6 Coder Model"
    }
  ]
};
