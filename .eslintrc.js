module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "**/tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-unneeded-ternary": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/array-type": "off",
  },
};
