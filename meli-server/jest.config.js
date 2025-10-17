export default {
  testEnvironment: 'node',
  transform: {},
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  testMatch: ['**/tests/**/*.test.js'],
  moduleFileExtensions: ['js'],
};
