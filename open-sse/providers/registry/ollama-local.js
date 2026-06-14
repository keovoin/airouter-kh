
export default {
  "id": "ollama-local",
  "alias": "ollama-local",
  display: {
      "name": "Ollama Local",
      "icon": "cloud",
      "color": "#ffffffff",
      "textIcon": "OL",
      "website": "https://ollama.com"
  },
  category: "apikey",
  "transport": {
    "baseUrl": "http://localhost:11434/api/chat",
    "format": "ollama"
  },
  media: {
    serviceKinds: ["llm"]
  }
};
