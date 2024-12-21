module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@rocketseat/eslint-config/react',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
