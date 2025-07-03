import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            import: pluginImport,
            'react-hooks': pluginReactHooks,
            'unused-imports': pluginUnusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            //* typescript
            '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-empty-pattern': 'off',

            //* react
            'react/react-in-jsx-scope': 'off',

            //* react hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'off',

            //* import
            'unused-imports/no-unused-imports': 'error',
            'import/no-unresolved': 'error',
            'import/order': 'off',

            //* export
            'simple-import-sort/exports': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },
    },
];
