// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/'],
  setupFiles: ['<rootDir>/src/server.ts'],
  globalTeardown: '<rootDir>/tests/index.ts',
};
