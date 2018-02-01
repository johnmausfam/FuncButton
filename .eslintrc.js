module.exports = {
    "extends": ["standard"],
    "parserOptions":{
        "ecmaVersion": 8,
        "sourceType":"module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread":true
        }
    },
    "env":{
        "commonjs":true
    },
    "parser": "babel-eslint",
    "rules":{
        "quotes": ["error", "double"],
        "semi":["error","always"],
        "curly": ["error", "multi"],
        "class-methods-use-this": "error",
        "space-before-function-paren": ["error", "never"],
        "no-alert":"allow",
        "no-console":"allow"
    }
};