module.exports = {
    extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['prettier'],
    rules: {
        'react/display-name': 'warn',
        'no-undef': 'warn',
        'no-unused-vars': 'warn',
        'no-console': 'warn',
        'prefer-const': 'warn',
        'no-var': 'warn',

        // for React/Next.js rules
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'warn',

        // Prettier format rules
        'prettier/prettier': 'error'
    }
}
