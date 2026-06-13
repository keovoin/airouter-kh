export default {
  "id": "perplexity-web",
  "alias": "perplexity-web",
  "transport": {
    "baseUrl": "https://www.perplexity.ai/rest/sse/perplexity_ask",
    "format": "perplexity-web",
    "authType": "cookie"
  },
  "models": [
    {
      "id": "pplx-auto",
      "name": "Perplexity Auto (Free)"
    },
    {
      "id": "pplx-sonar",
      "name": "Perplexity Sonar"
    },
    {
      "id": "pplx-gpt",
      "name": "GPT-5.4 (via Perplexity)"
    },
    {
      "id": "pplx-gemini",
      "name": "Gemini 3.1 Pro (via Perplexity)"
    },
    {
      "id": "pplx-sonnet",
      "name": "Claude Sonnet 4.6 (via Perplexity)"
    },
    {
      "id": "pplx-opus",
      "name": "Claude Opus 4.6 (via Perplexity)"
    },
    {
      "id": "pplx-nemotron",
      "name": "Nemotron 3 Super (via Perplexity)"
    }
  ]
};
