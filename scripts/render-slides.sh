#!/usr/bin/env bash
# Re-render the example slide images and PDF from template/slides-preview.html.
# Needs Google Chrome. Run from anywhere: ./scripts/render-slides.sh
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PAGE="file://$PWD/template/slides-preview.html"
names=(what-qbraid-did best-moment check-it)
for i in 1 2 3; do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=3000 \
    --force-device-scale-factor=1.5 --window-size=1280,720 \
    --screenshot="images/slide-$i-${names[$((i-1))]}.png" "$PAGE?only=$i" 2>/dev/null
done
"$CHROME" --headless=new --disable-gpu --virtual-time-budget=3000 --no-pdf-header-footer \
  --print-to-pdf="template/example-slides.pdf" "$PAGE" 2>/dev/null
ls -la images template/example-slides.pdf
