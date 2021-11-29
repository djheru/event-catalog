# @di-proto/event-catalog

A prototype for a DI catalog to support publishing of event schema for use by Event Sourcing system participants

## Designing events

- Events and commands are defined as Typescript interfaces
- An event is composed conceptually of three types
  - The event/command itself
  - The data payload
  - The metadata payload
- The interfaces are divided into business domains (e.g. Account) 
- Each domain consists of subdomains (e.g. Address)
- The structure of this prototypes provides namespacing

```typescript
// Example client code
import { Account } from '@di-proto/event-catalog';
const updateAddressData: Account.Address.UpdateAddressData = {
  address1: '111 main st',
  address2: 'Box 123',
  city: 'Springfield',
  state: 'IL',
  postalCode: '11122',
  postalCodePlus4: '8888'
};

// - OR -
import { Address } from '@di-proto/event-catalog/dist/account';
const updateAddressData: Address.UpdateAddressData = { ... };

// - OR -
import { UpdateAddressData } from '@di-proto/event-catalog/dist/account/address.interface';
const updateAddressData: UpdateAddressData = { ... };
```

## Creating Documentation Artifacts

- The prototype has a script `generate-docs.sh` to build documentation from the Typescript interfaces
- The script uses the npm package `typedoc` (https://www.npmjs.com/package/typedoc)
- The script can be invoked with `npm run build:docs`
- The documentation lives in the ./docs folder
- This HTML documentation is published to GitHub pages (https://djheru.github.io/event-catalog/index.html)

## Creating a JSON Schema Specification

- The prototype has a script `generate-schema.sh` to build a JSON Schema file from the Typescript interfaces
- The script uses the npm package `ts-json-schema-generator` (https://www.npmjs.com/package/ts-json-schema-generator)
- The script can be invoked with `npm run build:schema`
- The schema lives in the ./src/schema folder
- The JSON Schema itself is exported so that it can be consumed by client code

## Publishing the Events for Participants

- Currently, the code is simply installed by npm directly from the GitHub repo
- This seems sufficient for me, but we may want to explore other options
  - Publishing to NPM registry
  - Publishing to GitHub registry
  - Providing an API that returns the JSON schema document itself

## Validation of Event Objects

- Maintaining the JSON Schema allows us to use auto-generated validation
- The `evented-app` repo contains an example of using the AJV library (https://www.npmjs.com/package/ajv) to handle this 
- This allows the client code to validate events against the JSON Schema for correctness
- Includes more robust validation parameters than plain Typescript
  - Number min/max values
  - String min/max length
  - Regex pattern matching

## Potential Enhancements

- Add Husky (https://www.npmjs.com/package/husky) git hooks to run `npm run prepare` script to automatically generate docs/schema
- Provide validation methods already baked in, so that client code doesn't have to build them with AJV
