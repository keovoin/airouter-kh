import { GOOGLE_OAUTH_CLIENT } from "../shared.js";

export default {
  "id": "gemini-cli",
  "alias": "gc",
  display: {
      "name": "Gemini CLI",
      "icon": "terminal",
      "color": "#4285F4",
      "website": "https://github.com/google-gemini/gemini-cli",
      "notice": {
          "signupUrl": "https://github.com/google-gemini/gemini-cli"
      },
      "deprecated": true,
      "deprecationNotice": "RISK_NOTICE"
  },
  category: "free",
  uiAlias: "gc",
  "transport": {
    "baseUrl": "https://cloudcode-pa.googleapis.com/v1internal",
    "format": "gemini-cli",
    cliVersion: "0.34.0",
    apiClient: "google-genai-sdk/1.41.0 gl-node/v22.19.0",
    usage: {
      quotaUrl: "https://cloudcode-pa.googleapis.com/v1internal:retrieveUserQuota",
      loadCodeAssistUrl: "https://cloudcode-pa.googleapis.com/v1internal:loadCodeAssist"
    },
    ...GOOGLE_OAUTH_CLIENT
  },
  "oauth": {
    "authorizeUrl": "https://accounts.google.com/o/oauth2/v2/auth",
    "tokenUrl": "https://oauth2.googleapis.com/token",
    "userInfoUrl": "https://www.googleapis.com/oauth2/v1/userinfo",
    "scopes": [
      "https://www.googleapis.com/auth/cloud-platform",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ]
  ,
    refresh: {"encoding":"form"}
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
  ],
  features: {"usage":true},
};
