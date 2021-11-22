#!/usr/bin/env bash

npx ts-json-schema-generator \
  --id '@di-proto/event-catalog' \
  --additional-properties true \
  --path "./src/**/*.ts" \
  --type "*" \
  --out "./schema.json"