module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'standard-with-typescript',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-extraneous-class': 'off'
    }
}
