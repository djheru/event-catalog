# event-catalog

Generate JSON Schema:

```
npx typescript-json-schema \
  --refs true \
  --aliasRefs true \
  --titles true \
  --defaultProps true \
  --required true \
  --tsNodeRegister true \
  "./src/**/*.ts" "*"
```
