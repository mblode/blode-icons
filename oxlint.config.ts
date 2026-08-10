import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, react, next],
  // Icon sources are generated from SVGs by the build; linting the thousands
  // of emitted files (and the copied JSON data/search index in the docs app)
  // is pure noise.
  ignorePatterns: [
    ...core.ignorePatterns,
    "packages/blode-icons-react/src",
    "apps/docs/src/icons-tsx",
    "apps/docs/src/icons-svg",
    "apps/docs/src/icons-data",
    "apps/docs/src/icons-metadata.json",
    "apps/docs/src/icons-search-index.json",
    // Generated Lucide mapping. Its `visualScore` values are data, but a few
    // land near a Math constant (0.434 vs LOG10E), so approx-constant fires on
    // rows nobody wrote and nobody can edit.
    "packages/blode-icons-react/scripts/lucide-mapping.ts",
  ],
  // Rules relaxed for this codebase during the biome -> oxlint (ultracite)
  // migration. Each flags a pre-existing pattern in the icon build scripts or
  // the older docs components that needs a wide mechanical refactor with no
  // safe autofix, so they're deferred rather than churned as part of a
  // dependency upgrade. Every other Ultracite rule stays enforced.
  rules: {
    // shadcn-style components assign arrow functions to consts.
    "func-style": "off",
    // cva variant maps and option objects read better in their authored order.
    "sort-keys": "off",
    // Build scripts and legacy components use plain regexes / index counters.
    "require-unicode-regexp": "off",
    "prefer-named-capture-group": "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "no-inline-comments": "off",
    "prefer-destructuring": "off",
    eqeqeq: "off",
    "no-eq-null": "off",
    "no-unused-vars": "off",
    "no-duplicate-imports": "off",
    "no-await-in-loop": "off",
    complexity: "off",
    "require-await": "off",
    // Node build scripts use sequential async and callback/promise chains.
    "promise/prefer-await-to-then": "off",
    "promise/prefer-await-to-callbacks": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/prefer-string-replace-all": "off",
    "unicorn/prefer-number-coercion": "off",
    "unicorn/no-single-promise-in-promise-methods": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/import-style": "off",
    "typescript/no-dynamic-delete": "off",
    // Deferred component-quality items (effect setState, raw <img>/<a>,
    // shiki's dangerouslySetInnerHTML, an image role) kept out of scope.
    "react/react-compiler": "off",
    "react/no-danger": "off",
    "nextjs/no-html-link-for-pages": "off",
    "nextjs/no-img-element": "off",
    "jsx-a11y/prefer-tag-over-role": "off",
  },
});
