---
'@k8o/arte-odyssey': minor
---

useResizeフックを追加

ResizeObserverを使用して要素のリサイズを検知するuseResizeフックを追加しました。

主な機能:
- ResizeObserverによる要素のリサイズ検知
- コールバックでResizeObserverEntryを受け取り可能
- enabledパラメータで監視の有効/無効を切り替え可能
- debounceMsパラメータで任意の間隔でdebounce処理が可能
