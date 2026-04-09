---
'@k8o/arte-odyssey': minor
---

Pagination コンポーネントを追加

前後ページ移動と現在位置 (`4 / 10`) を示すミニマルなページネーション。Button (`variant="skeleton" color="gray"`) ベースで実装し、他のナビゲーションコンポーネントと視覚的に統一。

```tsx
<Pagination
  totalPages={10}
  currentPage={page}
  onPageChange={setPage}
/>
```
