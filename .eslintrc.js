module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:@web-bee-ru/base', // js/ts only

    // npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
    'plugin:@web-bee-ru/react', // react
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // ...
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};
