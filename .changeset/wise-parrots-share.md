---
'@k8o/arte-odyssey': major
---

Restrict the public JavaScript and TypeScript API to the root
`@k8o/arte-odyssey` entrypoint.

Consumers must now import components, hooks, helpers, and types from the
package root instead of subpath exports.

Keep `@k8o/arte-odyssey/styles.css` as the only public subpath for stylesheet
loading.
