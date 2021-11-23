#!/usr/bin/env bash

npx typedoc \
  --out docs \
  --name "Events Catalog" \
  --theme default \
  --includeVersion \
  --gitRevision \
  --hideGenerator \
  src/index.ts