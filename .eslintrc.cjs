// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'camelcase': 'off',
    'no-restricted-globals': [ 'error', 'localStorage', 'Screen', 'name', 'history', 'External' ], // safari Throw [SecurityError (DOM Exception 18): The operation is insecure], use MB.localStorageDelegate instead
  }
}
