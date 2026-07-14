#!/bin/bash
# Rebuilds js/bundle.js from the source modules.
# Run this after editing any file under js/ : ./build-bundle.sh

cd "$(dirname "$0")"

MODULES=(
  js/data/config.js
  js/data/galleries.js
  js/data/locations.js
  js/utils.js
  js/globe/core.js
  js/globe/markers.js
  js/globe/animation.js
  js/ui/tooltip.js
  js/ui/panel.js
  js/ui/sidebar.js
  js/ui/lightbox.js
  js/ui/carousel.js
  js/ui/modal.js
  js/audio.js
  js/input.js
  js/main.js
)

OUT=js/bundle.js

{
  echo "// Shiplife Bundle - Generated $(date -u +%Y-%m-%dT%H:%M:%S.000Z)"
  echo "// This file combines all JS modules for faster loading."
  echo "// Do not edit directly - modify source files and rebuild."
  echo ""
  for f in "${MODULES[@]}"; do
    echo ""
    echo "// ============================================"
    echo "// SOURCE: $f"
    echo "// ============================================"
    echo ""
    cat "$f"
    echo ""
  done
} > "$OUT"

echo "Built $OUT ($(wc -l < "$OUT" | tr -d ' ') lines)"
