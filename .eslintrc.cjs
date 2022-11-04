/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    './.eslintrc-auto-import.json',
    'vue-global-api',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'no-undef': 0,
    'vue/multi-word-component-names': 0,
    'no-prototype-builtins': 0,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
