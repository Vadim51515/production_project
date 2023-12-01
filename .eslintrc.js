module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
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
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        "unused-imports", // TODO Удалят неиспользуемые импорты. Можно удалить тут и в rules после добавления prettier
        'i18next'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],
        "@typescript-eslint/indent": 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'error',
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars":["error", { "argsIgnorePattern": "^_$" }],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute:['data-testid'] }],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        "react/react-in-jsx-scope": "error"
    },
    overrides:[
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        }
    ]
};
