export default {
  "id": "kiro",
  "alias": "kr",
  "transport": {
    "baseUrl": "https://runtime.us-east-1.kiro.dev/generateAssistantResponse",
    "baseUrls": [
      "https://runtime.us-east-1.kiro.dev/generateAssistantResponse",
      "https://codewhisperer.us-east-1.amazonaws.com/generateAssistantResponse",
      "https://q.us-east-1.amazonaws.com/generateAssistantResponse"
    ],
    "format": "kiro",
    "retry": {
      "429": 0
    },
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/vnd.amazon.eventstream",
      "X-Amz-Target": "AmazonCodeWhispererStreamingService.GenerateAssistantResponse",
      "User-Agent": "AWS-SDK-JS/3.0.0 kiro-ide/1.0.0",
      "X-Amz-User-Agent": "aws-sdk-js/3.0.0 kiro-ide/1.0.0"
    },
    "tokenUrl": "https://prod.us-east-1.auth.desktop.kiro.dev/refreshToken",
    "authUrl": "https://prod.us-east-1.auth.desktop.kiro.dev"
  },
  "models": [
    {
      "id": "claude-sonnet-4.5",
      "name": "Claude Sonnet 4.5"
    },
    {
      "id": "claude-haiku-4.5",
      "name": "Claude Haiku 4.5"
    },
    {
      "id": "deepseek-3.2",
      "name": "DeepSeek 3.2",
      "strip": [
        "image",
        "audio"
      ]
    },
    {
      "id": "qwen3-coder-next",
      "name": "Qwen3 Coder Next",
      "strip": [
        "image",
        "audio"
      ]
    },
    {
      "id": "glm-5",
      "name": "GLM 5"
    },
    {
      "id": "MiniMax-M2.5",
      "name": "MiniMax M2.5"
    },
    {
      "id": "claude-sonnet-4.5-thinking",
      "name": "Claude Sonnet 4.5 (Thinking)"
    },
    {
      "id": "claude-haiku-4.5-thinking",
      "name": "Claude Haiku 4.5 (Thinking)"
    },
    {
      "id": "claude-sonnet-4.5-agentic",
      "name": "Claude Sonnet 4.5 (Agentic)"
    },
    {
      "id": "claude-haiku-4.5-agentic",
      "name": "Claude Haiku 4.5 (Agentic)"
    },
    {
      "id": "claude-sonnet-4.5-thinking-agentic",
      "name": "Claude Sonnet 4.5 (Thinking + Agentic)"
    },
    {
      "id": "claude-haiku-4.5-thinking-agentic",
      "name": "Claude Haiku 4.5 (Thinking + Agentic)"
    }
  ]
};
