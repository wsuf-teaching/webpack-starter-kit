module.exports = {
  env: {
    es2022: true,
    browser: true
  },
  extends: ['universe' /*, 'plugin:react/recommended'*/, 'prettier'],
  parserOptions: {
    ecmaVersion: '2022',
    ecmaFeatures: {
      jsx: true
    }
  },
  // plugins: ['react', 'react-native'],
  rules: {
    // 'react/prop-types': 0,
    // 'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['babel.config.js', 'node_modules/', '.git/'],
  overrides: [
    {
      files: ['webpack.config.js'],
      env: {
        node: true
      }
    }
  ]
};
