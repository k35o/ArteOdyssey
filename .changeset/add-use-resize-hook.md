---
'@k8o/arte-odyssey': minor
---

useResizeとuseWindowResizeフックを追加

要素とwindowのリサイズを検知する2つのフックを追加しました。

## useResize
ResizeObserverを使用して要素のリサイズを検知するフックです。

主な機能:
- ResizeObserverによる要素のリサイズ検知
- コールバックでResizeObserverEntryを受け取り可能
- enabledパラメータで監視の有効/無効を切り替え可能
- debounceMsパラメータで任意の間隔でdebounce処理が可能

## useWindowResize
windowのリサイズを検知するフックです。

主な機能:
- windowのリサイズイベントを検知
- コールバックでwindowサイズ（width, height）を受け取り可能
- enabledパラメータで監視の有効/無効を切り替え可能
- debounceMsパラメータで任意の間隔でdebounce処理が可能
- 初回のレンダリング時にはコールバックを呼び出さない
