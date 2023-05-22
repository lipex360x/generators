* packages

> yarn add -D plop tsup copyfiles

* package scripts

```json
"pregenerate": "tsup --silent generators/plopfile.ts --format esm --outDir .plop && copyfiles -u 1 generators/**/*.hbs .plop",
"generate": "plop --plopfile .plop/plopfile.mjs"
```