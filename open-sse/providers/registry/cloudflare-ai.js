
export default {
  "id": "cloudflare-ai",
  "alias": "cloudflare-ai",
  display: {
      "name": "Cloudflare",
      "icon": "cloud",
      "color": "#F38020",
      "textIcon": "CF",
      "website": "https://developers.cloudflare.com/workers-ai/",
      "notice": {
          "text": "Workers AI free tier. Requires a Cloudflare API token and Account ID.",
          "apiKeyUrl": "https://dash.cloudflare.com/profile/api-tokens"
      }
  },
  category: "freeTier",
  uiAlias: "cf",
  hasProviderSpecificData: true,
  aliases: ["cf"],
  "transport": {
    "baseUrl": "https://api.cloudflare.com/client/v4/accounts/{accountId}/ai/v1/chat/completions"
  },
  media: {
    serviceKinds: ["llm", "image"],
    hasProviderSpecificData: true
  },
  "models": [
    {
      "id": "@cf/meta/llama-3.2-1b-instruct",
      "name": "Llama 3.2 1B Instruct"
    },
    {
      "id": "@cf/meta/llama-3.2-3b-instruct",
      "name": "Llama 3.2 3B Instruct"
    },
    {
      "id": "@cf/meta/llama-3.1-8b-instruct-fp8-fast",
      "name": "Llama 3.1 8B Instruct FP8 Fast"
    },
    {
      "id": "@cf/meta/llama-3.1-8b-instruct-awq",
      "name": "Llama 3.1 8B Instruct AWQ"
    },
    {
      "id": "@cf/mistralai/mistral-small-3.1-24b-instruct",
      "name": "Mistral Small 3.1 24B Instruct"
    },
    {
      "id": "@cf/meta/llama-3.1-70b-instruct-fp8-fast",
      "name": "Llama 3.1 70B Instruct FP8 Fast"
    },
    {
      "id": "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
      "name": "Llama 3.3 70B Instruct FP8 Fast"
    },
    {
      "id": "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
      "name": "DeepSeek R1 Distill Qwen 32B"
    },
    {
      "id": "@cf/moonshotai/kimi-k2.5",
      "name": "Kimi K2.5"
    },
    {
      "id": "@cf/moonshotai/kimi-k2.6",
      "name": "Kimi K2.6"
    },
    {
      "id": "@cf/zai-org/glm-4.7-flash",
      "name": "GLM 4.7 Flash"
    },
    {
      "id": "@cf/qwen/qwq-32b",
      "name": "QwQ 32B"
    },
    {
      "id": "@cf/qwen/qwen2.5-coder-32b-instruct",
      "name": "Qwen 2.5 Coder 32B Instruct"
    },
    {
      "id": "@cf/black-forest-labs/flux-2-klein-9b",
      "name": "FLUX.2 Klein 9B",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/black-forest-labs/flux-2-klein-4b",
      "name": "FLUX.2 Klein 4B",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/black-forest-labs/flux-2-dev",
      "name": "FLUX.2 Dev",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/leonardo/lucid-origin",
      "name": "Lucid Origin",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/leonardo/phoenix-1.0",
      "name": "Phoenix 1.0",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/black-forest-labs/flux-1-schnell",
      "name": "FLUX.1 Schnell",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/bytedance/stable-diffusion-xl-lightning",
      "name": "SDXL Lightning",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/lykon/dreamshaper-8-lcm",
      "name": "DreamShaper 8 LCM",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "@cf/runwayml/stable-diffusion-v1-5-img2img",
      "name": "Stable Diffusion v1.5 Img2Img",
      "type": "image",
      "params": [
        "size"
      ],
      "capabilities": [
        "edit"
      ]
    },
    {
      "id": "@cf/runwayml/stable-diffusion-v1-5-inpainting",
      "name": "Stable Diffusion v1.5 Inpainting",
      "type": "image",
      "params": [
        "size"
      ],
      "capabilities": [
        "edit",
        "mask"
      ]
    },
    {
      "id": "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      "name": "SDXL Base 1.0",
      "type": "image",
      "params": [
        "size"
      ]
    }
  ]
};
