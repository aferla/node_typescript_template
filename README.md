# Node JS Typescript Setup

## NPM
### Setup
`npm init`

### Dev Dependencies 
1. Add `typescript`, `ts-node` and `nodemon`
	```bash
	npm install --save-dev typescript ts-node nodemon @types/node
	```
2. Add  `jest`, `ts-jest`
	```bash
	npm install --save-dev jest ts-jest @types/jest
	```
3. Add `eslint`, `@typescript-eslint/parser`, `@typescript-eslint-plugin`
	```bash
	npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
	```
 4. Add `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`
	```bash
		npm install --save-dev --save-exact prettier
		npm install --save-dev eslint-config-prettier eslint-plugin-prettier
	```

devDependencies should look like:
```json
  "devDependencies": {
    "@types/jest": "^26.0.24",
    "@types/node": "^16.3.1",
    "@typescript-eslint/eslint-plugin": "^4.28.2",
    "@typescript-eslint/parser": "^4.28.2",
    "eslint": "^7.30.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "jest": "^27.0.6",
    "nodemon": "^2.0.11",
    "prettier": "2.3.2",
    "ts-jest": "^27.0.3",
    "ts-node": "^10.1.0",
    "typescript": "^4.3.5"
  }
```

### Scripts
```json
	"scripts": {
	"dev": "nodemon src/index.ts",
	"test": "jest src/",
	"build": "tsc -p .",
	"clean": "rm -rf ./dist",
	"lint": "eslint . --ext .ts"
}
```

## TypeScript Setup
### Setup
`npx tsc --init`

### ts-config.ts
Change:
```
"outDir": "./dist",
"rootDir": "./src",
```

## Jest Setup
Add the following to `jest.config.js`:
```javascript
module.exports = {
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.ts?$": "ts-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```

Dont forget to exclude the tests from the Typescript build by adding to `ts-config.ts`:
```
"exclude": ["node_modules", "**/__tests__/**/*.ts", "**/**/*.test.ts"]
```

## EsLint Setup
In `.eslintrc` add:
```json
{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint"
    ],
   "env": {
	"node": true,
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ]
  }
```

Add to `.eslintignore`
```text
node_modules
dist
```

Add following eslint plugin propeties the the VS Code settings (if not already there):
```json
   "eslint.validate": [
        "typescript", "typescriptreact"
    ],
```
## Prettier Setup
Add the `pretter` config to  `.eslintrc`:
```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```
Add the `eslint-plugin-prettier` to  `.eslintrc`
```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  },
  "extends": [
  	...
	"plugin:prettier/recommended"
  ]
}
```
