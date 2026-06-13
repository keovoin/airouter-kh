export default {
  "id": "cursor",
  "alias": "cu",
  "transport": {
    "baseUrl": "https://api2.cursor.sh",
    "chatPath": "/aiserver.v1.ChatService/StreamUnifiedChatWithTools",
    "format": "cursor",
    "headers": {
      "connect-accept-encoding": "gzip",
      "connect-protocol-version": "1",
      "Content-Type": "application/connect+proto",
      "User-Agent": "connect-es/1.6.1"
    },
    "clientVersion": "3.1.0"
  },
  "models": [
    {
      "id": "default",
      "name": "Auto (Server Picks)"
    },
    {
      "id": "claude-4.5-opus-high-thinking",
      "name": "Claude 4.5 Opus High Thinking"
    },
    {
      "id": "claude-4.5-opus-high",
      "name": "Claude 4.5 Opus High"
    },
    {
      "id": "claude-4.5-sonnet-thinking",
      "name": "Claude 4.5 Sonnet Thinking"
    },
    {
      "id": "claude-4.5-sonnet",
      "name": "Claude 4.5 Sonnet"
    },
    {
      "id": "claude-4.5-haiku",
      "name": "Claude 4.5 Haiku"
    },
    {
      "id": "claude-4.5-opus",
      "name": "Claude 4.5 Opus"
    },
    {
      "id": "gpt-5.2-codex",
      "name": "GPT 5.2 Codex"
    },
    {
      "id": "claude-4.6-opus-max",
      "name": "Claude 4.6 Opus Max"
    },
    {
      "id": "claude-4.6-sonnet-medium-thinking",
      "name": "Claude 4.6 Sonnet Medium Thinking"
    },
    {
      "id": "kimi-k2.5",
      "name": "Kimi K2.5"
    },
    {
      "id": "gemini-3-flash-preview",
      "name": "Gemini 3 Flash Preview"
    },
    {
      "id": "gpt-5.2",
      "name": "GPT 5.2"
    },
    {
      "id": "gpt-5.3-codex",
      "name": "GPT 5.3 Codex"
    }
  ]
};
