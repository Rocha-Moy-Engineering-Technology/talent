#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-8765}"
URL="http://localhost:${PORT}/"

python3 -m http.server "${PORT}" >/dev/null 2>&1 &
PID=$!
trap 'kill "${PID}" 2>/dev/null || true' EXIT INT TERM

sleep 0.3
echo "Serving salary progression plan at ${URL}"
if command -v open >/dev/null 2>&1; then
  open "${URL}"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "${URL}"
fi
echo "Press Ctrl-C to stop."
wait "${PID}"
