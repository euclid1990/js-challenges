module.exports = {
  "extends": [
    "standard",
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    'semi': [1, 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'no-unused-expressions': 'off',
    'no-useless-constructor': 'off',
    'no-unused-vars': 'warn',
    'no-new': 'warn',
    'eol-last': ['error', 'always'],
  },
  'globals': {
    'describe': true,
    'it' : true
  }
};
