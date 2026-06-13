export default {
  "id": "deepseek",
  "alias": "deepseek",
  "transport": {
    "baseUrl": "https://api.deepseek.com/chat/completions"
  },
  "models": [
    {
      "id": "deepseek-v4-pro",
      "name": "DeepSeek V4 Pro"
    },
    {
      "id": "deepseek-v4-pro-max",
      "name": "DeepSeek V4 Pro Max",
      "upstreamModelId": "deepseek-v4-pro"
    },
    {
      "id": "deepseek-v4-pro-none",
      "name": "DeepSeek V4 Pro No Thinking",
      "upstreamModelId": "deepseek-v4-pro"
    },
    {
      "id": "deepseek-v4-flash",
      "name": "DeepSeek V4 Flash"
    },
    {
      "id": "deepseek-chat",
      "name": "DeepSeek V3.2 Chat"
    },
    {
      "id": "deepseek-reasoner",
      "name": "DeepSeek V3.2 Reasoner"
    }
  ]
};
