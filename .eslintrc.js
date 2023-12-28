module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    camelcase: "error",
    "spaced-comment": "error",
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": 0,
    "no-duplicate-imports": "error",
    semi: "off",
    "@typescript-eslint/semi": "off",
    "no-console": ["warn", { allow: ["error", "warn"] }],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-debugger": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
