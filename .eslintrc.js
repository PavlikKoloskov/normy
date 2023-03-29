module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    camelcase: 2,
    'no-lonely-if': 2,
    'no-tabs': 2,
    'no-unneeded-ternary': 2,
    'prefer-exponentiation-operator': 2,
    'prefer-object-spread': 2,
    'unicode-bom': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-const': 2,
    'no-useless-constructor': 2,
    'no-useless-computed-key': 2,
    'no-duplicate-imports': 2,
    'prefer-template': 2,
    'no-use-before-define': 2,
    'no-undef-init': 2,
    'no-shadow': 2,
    'require-await': 2,
    'no-useless-return': 2,
    'no-useless-concat': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-template-curly-in-string': 2,
    'no-unreachable-loop': 2,
    'require-atomic-updates': 2,
    'consistent-return': 2,
    curly: 2,
    eqeqeq: 2,
    'no-else-return': 2,
    'no-extra-bind': 2,
    'no-lone-blocks': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'arrow-body-style': 2,
    'no-console': 1,

    'import/no-unresolved': 2,
    'import/no-self-import': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-named-default': 2,
    'import/dynamic-import-chunkname': 2,
    'import/no-unused-modules': [
      0,
      {
        missingExports: false,
        unusedExports: true,
        ignoreExports: ['**/*/index.js'],
      },
    ],
    'import/no-extraneous-dependencies': 2,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/named': 2,

    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/button-has-type': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-unsafe': 2,
    'react/no-unused-state': 2,
    'react/self-closing-comp': 2,
    'react/style-prop-object': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-fragments': 2,
    'react/jsx-no-script-url': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-filename-extension': 2,

    'react-hooks/exhaustive-deps': 0,
  },
};
