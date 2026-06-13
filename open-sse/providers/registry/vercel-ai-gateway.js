export default {
  "id": "vercel-ai-gateway",
  "alias": "vercel-ai-gateway",
  "transport": {
    "baseUrl": "https://ai-gateway.vercel.sh/v1/chat/completions",
    "retry": {
      "429": 2
    }
  }
};
