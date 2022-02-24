module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
