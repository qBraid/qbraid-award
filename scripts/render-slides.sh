#!/usr/bin/env bash
# Rebuild the decks, then render them with Keynote (macOS) to template/*.pdf and images/*.png.
# Needs: node with pptxgenjs, react, react-dom, react-icons and sharp on NODE_PATH; Keynote; python with pymupdf.
set -euo pipefail
cd "$(dirname "$0")/.."
node scripts/build-slides.js
for d in template example; do
  osascript <<OSA
tell application "Keynote"
  set theDoc to open POSIX file "$PWD/template/qbraid-award-$d.pptx"
  delay 2
  export theDoc to POSIX file "$PWD/template/qbraid-award-$d.pdf" as PDF
  close theDoc saving no
end tell
OSA
done
mkdir -p images
python3 - <<'PY'
import pymupdf
for d in ["template", "example"]:
    doc = pymupdf.open(f"template/qbraid-award-{d}.pdf")
    for i, page in enumerate(doc, 1):
        page.get_pixmap(matrix=pymupdf.Matrix(2, 2)).save(f"images/{d}-{i}.png")
PY
rm -f template/qbraid-award-template.pdf  # only the example PDF is published
ls images template
