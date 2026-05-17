#!/usr/bin/env bash
# One-shot: register the bot's webhook with Telegram. Run once after deploy
# (and again whenever TELEGRAM_BOT_TOKEN or the public hostname changes).
#
# Required env vars (read from your shell, not from .env):
#   TELEGRAM_BOT_TOKEN       - from @BotFather
#   TELEGRAM_WEBHOOK_SECRET  - same value you set in Fly secrets
#   PUBLIC_BASE_URL          - https://airouter-kh.fly.dev (or your custom domain)
#
# Usage:
#   TELEGRAM_BOT_TOKEN=... TELEGRAM_WEBHOOK_SECRET=... PUBLIC_BASE_URL=https://airouter-kh.fly.dev \
#     ./scripts/set-telegram-webhook.sh
set -euo pipefail

: "${TELEGRAM_BOT_TOKEN:?TELEGRAM_BOT_TOKEN required}"
: "${TELEGRAM_WEBHOOK_SECRET:?TELEGRAM_WEBHOOK_SECRET required}"
: "${PUBLIC_BASE_URL:?PUBLIC_BASE_URL required (e.g. https://airouter-kh.fly.dev)}"

URL="${PUBLIC_BASE_URL%/}/api/telegram"

echo "Registering webhook: ${URL}"

curl -fsS -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook" \
  -H "Content-Type: application/json" \
  -d "$(cat <<JSON
{
  "url": "${URL}",
  "secret_token": "${TELEGRAM_WEBHOOK_SECRET}",
  "allowed_updates": ["message"],
  "drop_pending_updates": true
}
JSON
)"
echo

echo "Verifying:"
curl -fsS "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo"
echo
