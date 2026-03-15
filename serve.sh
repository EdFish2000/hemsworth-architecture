#!/bin/bash
# Local preview server for Hemsworth Architecture website
# Usage: ./serve.sh
# Then open http://localhost:8000 in Safari

PORT=8000
echo "Starting preview server at http://localhost:$PORT"
echo "Press Ctrl+C to stop."
open "http://localhost:$PORT"
python3 -m http.server $PORT
