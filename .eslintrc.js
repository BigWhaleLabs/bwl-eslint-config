module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  ignorePatterns: [
    '/node_modules/',
    '.eslintrc.js',
    'metro.config.js',
    'vite.config.ts',
    'vite.config.js',
    '*.min.js',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'sort-imports-es6-autofix',
    'import',
    'no-relative-import-paths',
    'sort-destructure-keys',
    'sort-keys-fix',
    'eslint-plugin-node',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:valtio/recommended',
  ],
  rules: {
    'node/no-process-env': 'error',
    curly: ['error', 'multi-or-nest'],
    'sort-keys-fix/sort-keys-fix': 'error',
    'valtio/state-snapshot-rule': 'off',
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: false },
    ],
    'import/newline-after-import': ['error'],
    '@typescript-eslint/no-floating-promises': 'error',
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: true },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'ignore', propElementValues: 'always' },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
        callbacksLast: true,
        multiline: 'last',
      },
    ],
    'require-await': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'import/prefer-default-export': 'error',
  },
}
