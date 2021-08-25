const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'testing-library', 'jest-dom'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', path.resolve(__dirname, './src')],
          ['@', path.resolve(__dirname, './src/components')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
    {
      files: ['types.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      extends: ['eslint:recommended', 'plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      globals: {
        test: true,
        expect: true,
        jest: true,
        localStorage: true,
        window: true,
      },
    },
  ],
};
