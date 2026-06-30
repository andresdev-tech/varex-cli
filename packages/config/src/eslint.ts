export const eslintConfig = {
  env: {
    node: true,
    es2023: true,
  },

  extends: [
    "eslint:recommended",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};