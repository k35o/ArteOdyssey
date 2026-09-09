---
'@k8ordo/ui': patch
---

`Textarea` の `autoResize` と `PromptInput.Textarea` の高さ追従を、JS の実測から CSS の `field-sizing: content` に置き換えました。

`scrollHeight` を測って `style.height` を書いていたのは、中身に合わせて伸びるフォームコントロールを CSS が持っていなかった頃の代用です。Baseline に入った今はブラウザ側の仕事なので、`value` の変化を待つエフェクトも、内部 ref と利用者の ref を合成する必要もなくなりました。インライン `style` を書かなくなるぶん、実際の高さがわずかに変わる場合があります。

あわせて内部の作りを React Compiler の規則に合わせました。振る舞いは変わりませんが、`useControllableState` が返す更新関数だけは、値が変わったときに参照が変わるようになります（従来は常に同一参照でした）。依存配列に入れている場合はご注意ください。
