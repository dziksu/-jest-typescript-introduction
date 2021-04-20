# Unit tests using JEST with typescript

### Minimal requirements modules to run:

```json
{
  "typescript": "^4.2.4",
  "@types/jest": "^26.0.22",
  "jest": "^26.6.3",
  "ts-jest": "^26.5.5"
}
```

### jest configuration in `jest.config.js`

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

#### finally, add some scripts in `package.json`
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### VSCode Debug
```json
{
  "type": "node",
  "request": "launch",
  "name": "Jest Current File",
  "program": "${workspaceFolder}/node_modules/.bin/jest",
  "args": ["${relativeFile}"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen",
  "windows": {
    "program": "${workspaceFolder}/node_modules/jest/bin/jest"
  }
}
```

### Resources
  
https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40

https://github.com/ChiragRupani/TSUnitTestsSetup/tree/master/HelloJest

### Alternatives

- [Mocha](https://github.com/mochajs/mocha) / [Chai](https://github.com/chaijs/chai)
- [Jasmine](https://github.com/jasmine/jasmine)



