module.exports = {
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  extends: 'plugin:import/typescript',
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
}
