const requireText = require('require-text');
const typeDefs = requireText('./mocks/schema.graphql', require);

module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest', 'import', 'filenames', 'graphql'],
  extends: ['ezcater-base', 'plugin:jest/recommended'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaString: typeDefs,
      },
    ],
    'filenames/match-regex': ['error', '^[.a-zA-Z0-9]+$'],
    'filenames/match-exported': 'error',
    'import/default': 'error',
    'import/extensions': ['error', 'never', {svg: 'always'}],
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-commonjs': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false,
      },
    ],
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-default': 'error',
    'import/no-namespace': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link', 'NavLink'],
        specialLink: ['to'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
      },
    ],
  },
  parser: 'babel-eslint',
  root: true,
};
