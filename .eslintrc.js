module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "next",
        "next/core-web-vitals",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:testing-library/react"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project":"./tsconfig.json",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types":"off"
    }
}
