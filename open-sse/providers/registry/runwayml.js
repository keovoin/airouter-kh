
export default {
  "id": "runwayml",
  "alias": "runwayml",
  display: {
      "name": "Runway ML",
      "icon": "movie",
      "color": "#000000",
      "textIcon": "RW",
      "website": "https://runwayml.com",
      "notice": {
          "apiKeyUrl": "https://dev.runwayml.com"
      }
  },
  category: "apikey",
  uiAlias: "runway",
  authType: "apikey",
  aliases: ["runway"],
  "transport": null,
  "models": [
    {
      "id": "gen4_image",
      "name": "Gen-4 Image",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "gen4_image_turbo",
      "name": "Gen-4 Image Turbo",
      "type": "image",
      "params": [
        "size"
      ]
    },
    {
      "id": "gen4_turbo",
      "name": "Gen-4 Turbo",
      "type": "video",
      "params": []
    },
    {
      "id": "gen3a_turbo",
      "name": "Gen-3 Alpha Turbo",
      "type": "video",
      "params": []
    }
  ]
};
