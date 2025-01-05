import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      ".next/**",
      "dist/**",
      "node_modules/**",
    ],
    
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser, 
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, 
        },
      },
    },
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "jsx-a11y": eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintPluginTypescript,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended", 
      "plugin:@typescript-eslint/recommended", 
      "plugin:prettier/recommended", 
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: true,
          singleQuote: true,
          trailingComma: "es5",
          bracketSpacing: true,
        },
      ],
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "react/jsx-no-target-blank": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
    settings: {
      react: {
        version: "18.2",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
        },
      },
    },
  },
];
