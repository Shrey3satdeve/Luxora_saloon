module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/jest/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  cacheDirectory: '.jest/cache',
};
