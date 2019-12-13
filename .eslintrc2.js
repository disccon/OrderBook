module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-hooks',],
  env: {
      "browser": true,
  },
  parserOptions: {
    ecmaVersion: 7,
      sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    // "no-unused-vars": [
    //   "error"
    // ],
    // "no-console": "error",
    // "jsx-a11y/href-no-hash": "off",
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    // "@typescript-eslint/no-use-before-define": "off",
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/camelcase": "off",
    // "@typescript-eslint/explicit-member-accessibility": "off",
    // "@typescript-eslint/ban-ts-ignore": "off"




    // "react/prop-types": "off",
    //
    // "no-prototype-builtins": "off",
    // "import/no-default-export": "error",
    // // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    // "react/destructuring-assignment": "off",
    // // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    // "react/jsx-filename-extension": "off",
    // // Use function hoisting to improve code readability
    // "no-use-before-define": [
    //   "error",
    //   { functions: false, classes: true, variables: true },
    // ],
    // // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    // "@typescript-eslint/explicit-function-return-type": [
    //   "error",
    //   { allowExpressions: true, allowTypedFunctionExpressions: true },
    // ],
    // "@typescript-eslint/no-use-before-define": [
    //   "error",
    //   { functions: false, classes: true, variables: true, typedefs: true },
    // ],
    // "@typescript-eslint/no-namespace": "off",
    // "@typescript-eslint/no-parameter-properties": "off",



  //   "react/state-in-constructor": 0,
  //   "jsx-a11y/no-static-element-interactions": "off",
  //   "jsx-a11y/click-events-have-key-events": "off",
  //   'react/forbid-prop-types': 0,
  //   'import/prefer-default-export': 0,
  //   'react/jsx-key': 2,
  //   'no-nested-ternary': 'off',
  //   'react/no-unused-prop-types': 2,
  //   'react/jsx-uses-vars': 'error',
  //   'react/jsx-uses-react': 'error',
  //   'class-methods-use-this': ['error', { 'exceptMethods': ['render', 'componentDidMount'] }],
  //   'func-names': [1, 'as-needed'],
  //   'no-shadow': 'off',
  //   'no-restricted-syntax': [
  //     'error',
  //     'ForInStatement',
  //     'LabeledStatement',
  //     'WithStatement',
  //   ],
  //   'max-len': [
  //     'error',
  //     120,
  //     2
  //   ],
  //   'eol-last': [
  //     'error',
  //     'always'
  //   ],
  //   'semi': [
  //     'error',
  //     'never'
  //   ],
  //   'jsx-quotes': [
  //     'error',
  //     'prefer-single'
  //   ],
  //   'arrow-parens': [
  //     "error",
  //     "as-needed"
  //   ],
  //   'object-curly-spacing': [
  //     'error',
  //     'always'
  //   ],
  //   'quotes': [
  //     'error',
  //     'single',
  //     {'avoidEscape': true}
  //   ],
  //   'react/jsx-max-props-per-line': [
  //     'error',
  //     {'maximum': 1, 'when': 'multiline'}
  //   ],
  //   'react/jsx-tag-spacing': [
  //     'error',
  //     {'beforeSelfClosing': 'always'}
  //   ],
  //   'react/jsx-filename-extension': [
  //     'error',
  //     {'extensions': ['.jsx', '.js']}
  //   ],
  //   'react/no-array-index-key': [
  //     0
  //   ],
  },
}
