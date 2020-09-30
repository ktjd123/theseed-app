module.exports = {
  root: true,
  extends: ['airbnb', '@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
  },
};
