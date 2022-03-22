const baseConfig = require('./jest.base.config.cjs')

/**
 * @type {import('ts-jest/dist/types').InitialOptionsTsJest}
 */
module.exports = {
  ...baseConfig,
  testMatch: ["<rootDir>/src/courseDevelopment/**/*.(spec|test).ts"],
};
