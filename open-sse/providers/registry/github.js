export default {
  "id": "github",
  "alias": "gh",
  "transport": {
    "baseUrl": "https://api.githubcopilot.com/chat/completions",
    "responsesUrl": "https://api.githubcopilot.com/responses",
    "headers": {
      "copilot-integration-id": "vscode-chat",
      "editor-version": "vscode/1.110.0",
      "editor-plugin-version": "copilot-chat/0.38.0",
      "user-agent": "GitHubCopilotChat/0.38.0",
      "openai-intent": "conversation-panel",
      "x-github-api-version": "2025-04-01",
      "x-vscode-user-agent-library-version": "electron-fetch",
      "X-Initiator": "user",
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    "clientId": "Iv1.b507a08c87ecfe98"
  },
  "models": [
    {
      "id": "gpt-3.5-turbo",
      "name": "GPT-3.5 Turbo"
    },
    {
      "id": "gpt-4",
      "name": "GPT-4"
    },
    {
      "id": "gpt-4o",
      "name": "GPT-4o"
    },
    {
      "id": "gpt-4o-mini",
      "name": "GPT-4o mini"
    },
    {
      "id": "gpt-4.1",
      "name": "GPT-4.1"
    },
    {
      "id": "gpt-5-mini",
      "name": "GPT-5 Mini"
    },
    {
      "id": "gpt-5.2",
      "name": "GPT-5.2"
    },
    {
      "id": "gpt-5.2-codex",
      "name": "GPT-5.2 Codex"
    },
    {
      "id": "gpt-5.3-codex",
      "name": "GPT-5.3 Codex"
    },
    {
      "id": "gpt-5.4",
      "name": "GPT-5.4"
    },
    {
      "id": "gpt-5.4-mini",
      "name": "GPT-5.4 Mini"
    },
    {
      "id": "claude-haiku-4.5",
      "name": "Claude Haiku 4.5"
    },
    {
      "id": "claude-opus-4.5",
      "name": "Claude Opus 4.5"
    },
    {
      "id": "claude-sonnet-4",
      "name": "Claude Sonnet 4"
    },
    {
      "id": "claude-sonnet-4.5",
      "name": "Claude Sonnet 4.5"
    },
    {
      "id": "claude-sonnet-4.6",
      "name": "Claude Sonnet 4.6"
    },
    {
      "id": "claude-opus-4.6",
      "name": "Claude Opus 4.6"
    },
    {
      "id": "claude-opus-4.7",
      "name": "Claude Opus 4.7"
    },
    {
      "id": "gemini-2.5-pro",
      "name": "Gemini 2.5 Pro"
    },
    {
      "id": "gemini-3-flash-preview",
      "name": "Gemini 3 Flash"
    },
    {
      "id": "gemini-3.1-pro-preview",
      "name": "Gemini 3.1 Pro"
    },
    {
      "id": "grok-code-fast-1",
      "name": "Grok Code Fast 1"
    },
    {
      "id": "oswe-vscode-prime",
      "name": "Raptor Mini"
    },
    {
      "id": "goldeneye-free-auto",
      "name": "GoldenEye"
    },
    {
      "id": "text-embedding-3-small",
      "name": "Text Embedding 3 Small (GitHub)",
      "type": "embedding"
    },
    {
      "id": "text-embedding-3-large",
      "name": "Text Embedding 3 Large (GitHub)",
      "type": "embedding"
    }
  ]
};
