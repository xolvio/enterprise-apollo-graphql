/**
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testEnvironment: "node",
  resolver: "ts-jest-resolver",
  restoreMocks: true,
  testMatch: ["<rootDir>/src/**/*.(spec|test).ts"],
  injectGlobals: false,
  transform: {},
  setupFilesAfterEnv: [
    '<rootDir>/src/testSetup.ts'
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node", "gql"]
};
