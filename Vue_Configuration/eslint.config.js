import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import prettier  from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  /** @base-ts-vue-check */
  {
    files: ["**/*.{js,ts,vue}"],
    ignores: [
      "**/dist/**",
      "**/node_modules/**"
    ],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.browser,
    },
    plugins: {
      vue: pluginVue,
      typescript: tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.eslintRecommended.rules,
      ...pluginVue.configs["vue3-recommended"].rules,
      "no-console": "warn",
    }
  },
  /** resolve *.vue parsing error */
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      }
    }
  },
  /** import prettier's setting rules */
  {
    rules: {
      ...prettier.rules,
    }
  }
];
