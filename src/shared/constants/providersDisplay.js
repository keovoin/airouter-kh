// UI display config — registry providers derive from registry.display.
// Non-registry providers (media-only: tts, stt, search, fetch) kept hardcoded here.
import REGISTRY from "open-sse/providers/registry/index.js";

export const RISK_NOTICE = "⚠️ Risk Notice: This provider uses a subscription/OAuth session not officially licensed for proxy/router use. Account may be restricted or banned. Use at your own risk.";

// Non-registry media-only providers display config
const MEDIA_ONLY_DISPLAY = {
  "elevenlabs": {
    "name": "ElevenLabs",
    "icon": "record_voice_over",
    "color": "#6C47FF",
    "textIcon": "EL",
    "website": "https://elevenlabs.io",
    "notice": {
      "apiKeyUrl": "https://elevenlabs.io/app/settings/api-keys"
    }
  },
  "cartesia": {
    "name": "Cartesia",
    "icon": "spatial_audio",
    "color": "#FF4F8B",
    "textIcon": "CA",
    "website": "https://cartesia.ai",
    "notice": {
      "apiKeyUrl": "https://play.cartesia.ai/keys"
    },
    "hidden": true
  },
  "playht": {
    "name": "PlayHT",
    "icon": "play_circle",
    "color": "#00B4D8",
    "textIcon": "PH",
    "website": "https://play.ht",
    "notice": {
      "apiKeyUrl": "https://play.ht/studio/api-access"
    },
    "hidden": true
  },
  "local-device": {
    "name": "Local Device",
    "icon": "speaker",
    "color": "#64748B",
    "textIcon": "LD",
    "mediaPriority": 5
  },
  "google-tts": {
    "name": "Google TTS",
    "icon": "record_voice_over",
    "color": "#4285F4",
    "textIcon": "GT",
    "mediaPriority": 5
  },
  "edge-tts": {
    "name": "Edge TTS",
    "icon": "record_voice_over",
    "color": "#0078D4",
    "textIcon": "ET",
    "mediaPriority": 5
  },
  "coqui": {
    "name": "Coqui TTS",
    "icon": "record_voice_over",
    "color": "#10B981",
    "textIcon": "CQ",
    "website": "https://github.com/coqui-ai/TTS",
    "hidden": true
  },
  "tortoise": {
    "name": "Tortoise TTS",
    "icon": "record_voice_over",
    "color": "#7C3AED",
    "textIcon": "TT",
    "website": "https://github.com/neonbjb/tortoise-tts",
    "hidden": true
  },
  "inworld": {
    "name": "Inworld TTS",
    "icon": "record_voice_over",
    "color": "#FF6B6B",
    "textIcon": "IW",
    "website": "https://inworld.ai",
    "notice": {
      "text": "Free tier: 40 minutes/month TTS. Paid: TTS-1.5 Mini $0.01/min ($15/1M chars), TTS-1.5 Max $0.025/min ($30/1M chars). 270+ voices, 15 languages.",
      "apiKeyUrl": "https://platform.inworld.ai/api-keys"
    }
  },
  "aws-polly": {
    "name": "AWS Polly",
    "icon": "record_voice_over",
    "color": "#FF9900",
    "textIcon": "PL",
    "website": "https://aws.amazon.com/polly/",
    "notice": {
      "text": "Use AWS Secret Access Key as API key; set providerSpecificData.accessKeyId and optional region.",
      "apiKeyUrl": "https://console.aws.amazon.com/iam/home#/security_credentials"
    }
  },
  "jina-ai": {
    "name": "Jina AI",
    "icon": "blur_on",
    "color": "#2563EB",
    "textIcon": "JA",
    "website": "https://jina.ai",
    "notice": {
      "text": "10M free tokens on signup (non-commercial), no credit card required.",
      "apiKeyUrl": "https://jina.ai/?sui=apikey"
    }
  },
  "jina-reader": {
    "name": "Jina Reader",
    "icon": "menu_book",
    "color": "#000000",
    "textIcon": "JR",
    "website": "https://jina.ai/reader",
    "notice": {
      "apiKeyUrl": "https://jina.ai/?sui=apikey"
    }
  },
  "tavily": {
    "name": "Tavily",
    "icon": "search",
    "color": "#5B21B6",
    "textIcon": "TV",
    "website": "https://tavily.com",
    "notice": {
      "apiKeyUrl": "https://app.tavily.com/home"
    }
  },
  "brave-search": {
    "name": "Brave Search",
    "icon": "travel_explore",
    "color": "#FB542B",
    "textIcon": "BR",
    "website": "https://brave.com/search/api",
    "notice": {
      "apiKeyUrl": "https://api-dashboard.search.brave.com/app/keys"
    }
  },
  "serper": {
    "name": "Serper",
    "icon": "search",
    "color": "#4F46E5",
    "textIcon": "SP",
    "website": "https://serper.dev",
    "notice": {
      "apiKeyUrl": "https://serper.dev/api-key"
    }
  },
  "exa": {
    "name": "Exa",
    "icon": "manage_search",
    "color": "#2563EB",
    "textIcon": "EX",
    "website": "https://exa.ai",
    "notice": {
      "apiKeyUrl": "https://dashboard.exa.ai/api-keys"
    }
  },
  "searxng": {
    "name": "SearXNG",
    "icon": "saved_search",
    "color": "#3B82F6",
    "textIcon": "SX",
    "website": "https://docs.searxng.org"
  },
  "google-pse": {
    "name": "Google PSE",
    "icon": "search",
    "color": "#4285F4",
    "textIcon": "GP",
    "website": "https://programmablesearchengine.google.com",
    "notice": {
      "apiKeyUrl": "https://programmablesearchengine.google.com/controlpanel/create"
    }
  },
  "linkup": {
    "name": "Linkup",
    "icon": "link",
    "color": "#0EA5E9",
    "textIcon": "LK",
    "website": "https://linkup.so",
    "notice": {
      "apiKeyUrl": "https://app.linkup.so/api-keys"
    }
  },
  "searchapi": {
    "name": "SearchAPI",
    "icon": "search",
    "color": "#0EA5A4",
    "textIcon": "SA",
    "website": "https://www.searchapi.io",
    "notice": {
      "apiKeyUrl": "https://www.searchapi.io/dashboard"
    }
  },
  "youcom": {
    "name": "You.com Search",
    "icon": "search",
    "color": "#7C3AED",
    "textIcon": "YC",
    "website": "https://you.com",
    "notice": {
      "apiKeyUrl": "https://api.you.com"
    }
  },
  "firecrawl": {
    "name": "Firecrawl",
    "icon": "local_fire_department",
    "color": "#F59E0B",
    "textIcon": "FC",
    "website": "https://firecrawl.dev",
    "notice": {
      "apiKeyUrl": "https://www.firecrawl.dev/app/api-keys"
    }
  },
  "topaz": {
    "name": "Topaz",
    "icon": "image",
    "color": "#059669",
    "textIcon": "TP",
    "website": "https://topazlabs.com",
    "notice": {
      "apiKeyUrl": "https://topazlabs.com/account"
    }
  },
};

// Resolve "RISK_NOTICE" token → real notice text (registry stores token to avoid import cycle)
const resolveDisplay = (d) =>
  d.deprecationNotice === "RISK_NOTICE" ? { ...d, deprecationNotice: RISK_NOTICE } : d;

// Merge: registry providers take precedence
export const PROVIDER_DISPLAY = {
  ...MEDIA_ONLY_DISPLAY,
  ...Object.fromEntries(REGISTRY.filter(r => r.display).map(r => [r.id, resolveDisplay(r.display)])),
};
