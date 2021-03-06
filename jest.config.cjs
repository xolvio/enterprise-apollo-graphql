const baseConfig = require('./jest.base.config.cjs')

/**
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 */
module.exports = {
  ...baseConfig,
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/courseDevelopment/"
  ],
};
