module.exports = {
    root: true,
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/eslint-config-airbnb',
      '@vue/eslint-config-typescript'
    ],
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      project: ['./tsconfig.app.json', './tsconfig.node.json'],
      extraFileExtensions: ['.vue']
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.app.json', './tsconfig.node.json']
        }
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'import/extensions': ['error', 'ignorePackages', {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'vue': 'never'
      }],
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: [
          'vite.config.*',
          'vitest.config.*',
          'cypress.config.*',
          'playwright.config.*',
          '**/*.test.ts',
          '**/*.spec.ts',
          'test/**/*'
        ]
      }],
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // pour Pinia
          'acc',   // pour reducers
          'e'      // pour e.returnvalue
        ]
      }],
      'max-len': ['error', {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }]
    }
  }