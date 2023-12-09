module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
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
        'unused-imports',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [
            2,
            4,
        ],
        'indent': [
            2,
            4,
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'error',
            { 'argsIgnorePattern': '^_$' },
        ],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120,
            },
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'react/display-name': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
