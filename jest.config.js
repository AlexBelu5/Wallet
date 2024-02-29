module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*|react-native|@react-native|react-redux|@noble|@multiversx/sdk-wallet|@multiversx/sdk-core|uuid|flow-parser))',
  ],
};
