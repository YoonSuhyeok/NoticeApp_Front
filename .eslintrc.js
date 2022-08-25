module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
            },
        },
    ],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'react/function-component-definition': [
            2,
            { namedcomponents: 'arrow-function' },
        ],
        "@typescript-eslint/indent": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-closing-bracket-location": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            },
        ],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        "import/order": ["error",
            { 
                "groups" : [ "external", "builtin", "internal", "sibling", "parent", "index" ],
                "alphabetize": { "order": "asc" },
                "newlines-between": "always"
            }
        ]
    },
};
