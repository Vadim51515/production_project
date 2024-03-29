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
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['react', 'unused-imports', 'i18next', 'react-hooks', 'inhellim', 'ulbi-tv-plugin'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_$' }],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            },
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        'storybook/prefer-pascal-case': 'off',
        'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
        'ulbi-tv-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'ulbi-tv-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
            },
        ],
        '@typescript-eslint/method-signature-style': 'off',
        // "import/order": ["error", {
        //     "newlines-between": "always"
        // }]
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
