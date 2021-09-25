module.exports = {
    env: {
        es6: true,
        node: true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    plugins: [
        '@typescript-eslint',
        "react", "react-hooks"
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "react/prop-types": 0,
        "prefer-const": 1
    }
};