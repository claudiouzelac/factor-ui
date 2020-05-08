module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue',
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.svg$': '<rootDir>/src/test/mocks/fileMock.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.*\\.svg$': '<rootDir>/src/test/mocks/fileMock.js',
  },
  testMatch: ['**/*.spec.(js|jsx|ts|tsx)'],
};
