import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";
import { Linter } from "eslint"; // Importa Linter para adicionar as regras da config Airbnb-base

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 12,
    },
    env: {
      es2021: true,
      node: true,
    },
    extends: ["eslint:recommended", airbnbBase],
    rules: {
      "no-param-reassign": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
      "max-len": ["error", { code: 80 }],
      "class-methods-use-this": "off",
      "no-restricted-syntax": "off",
      radix: "off",
    },
  },
  pluginJs.configs.recommended,
];
