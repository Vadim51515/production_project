module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: [
        'react',
        "unused-imports", // TODO Удалят неиспользуемые импорты. Можно удалить тут и в rules после добавления prettier
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        "@typescript-eslint/indent": 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'error',
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars":"error",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": 'off'
    },
};
