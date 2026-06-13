import { GOOGLE_OAUTH_CLIENT } from "../shared.js";

export default {
  "id": "gemini-cli",
  "alias": "gc",
  "transport": {
    "baseUrl": "https://cloudcode-pa.googleapis.com/v1internal",
    "format": "gemini-cli",
    ...GOOGLE_OAUTH_CLIENT
  },
  "models": [
    {
      "id": "gemini-3-flash-preview",
      "name": "Gemini 3 Flash Preview"
    },
    {
      "id": "gemini-3-pro-preview",
      "name": "Gemini 3 Pro Preview"
    }
  ]
};
