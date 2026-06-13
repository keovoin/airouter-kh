export default {
  "id": "kilocode",
  "alias": "kc",
  "transport": {
    "baseUrl": "https://api.kilo.ai/api/openrouter/chat/completions",
    "headers": {}
  },
  "models": [
    {
      "id": "anthropic/claude-sonnet-4-20250514",
      "name": "Claude Sonnet 4"
    },
    {
      "id": "anthropic/claude-opus-4-20250514",
      "name": "Claude Opus 4"
    },
    {
      "id": "google/gemini-2.5-pro",
      "name": "Gemini 2.5 Pro"
    },
    {
      "id": "google/gemini-2.5-flash",
      "name": "Gemini 2.5 Flash"
    },
    {
      "id": "openai/gpt-4.1",
      "name": "GPT-4.1"
    },
    {
      "id": "openai/o3",
      "name": "o3"
    },
    {
      "id": "deepseek/deepseek-chat",
      "name": "DeepSeek Chat"
    },
    {
      "id": "deepseek/deepseek-reasoner",
      "name": "DeepSeek Reasoner"
    }
  ]
};
