module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    URL: 'http://localhost:8080',
  },
  testMatch: [
    '**/tests/**/*.test.js',
  ],
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  testEnvironment: 'jest-environment-puppeteer',
  verbose: true,
};
