---
---

Build pipeline only: `build-storybook` now also emits a Decoro-friendly
`decoro-catalog.json` (component prop schemas + curated story examples) into
`storybook-static/`. Chromatic uploads it alongside the static, so it lands at
`https://<branch-or-sha>--<projectId>.chromatic.com/decoro-catalog.json` for
[Decoro](https://github.com/k35o/decoro)'s catalog generator to consume.

No publishable changes — the npm `dist/` is unaffected.
