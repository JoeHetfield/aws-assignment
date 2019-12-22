module.exports = {
    "extends": "airbnb",
    "plugins": [
      "import",
      "react-hooks",
    ],
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
      }
    },
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
    },
    "parser": "babel-eslint",
    "settings": {
      "import/resolver": {
        "webpack": {
          "config": "webpack.config.babel.js"
        }
      }
    },
    "rules": {
      "no-confusing-arrow": "off",
      "no-underscore-dangle": "off",
      "no-case-declarations": "off",
      "react/forbid-prop-types": "off",
      "react/style-prop-object": "off",
      "react/jsx-no-duplicate-props": "off",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
    }
};
