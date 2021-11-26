module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0,
    'no-debugger': 0,
    'arrow-body-style': 0,
  },
};
