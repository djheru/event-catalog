#!/usr/bin/env bash

npx ts-json-schema-generator \
  --id 'di-proto/event-catalog' \
  --expose all \
  --path "./src/**/*.ts" \
  --type "*" \
  --tsconfig 'tsconfig.json' \
  --out "src/schema/event-catalog.schema.json"