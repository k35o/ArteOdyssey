'use client';

import { CheckboxCard } from '@k8o/arte-odyssey';
import { useState } from 'react';

const options = [
  {
    value: 'history',
    label: 'Version history',
    description: '変更履歴を保存して必要な時に差し戻せます。',
  },
  {
    value: 'comments',
    label: 'Inline comments',
    description: '各セクションに直接フィードバックを残せます。',
  },
  {
    value: 'share',
    label: 'Share links',
    description: '閲覧専用の共有リンクをすぐに発行できます。',
  },
] as const;

export function CheckboxCardControlledPreview() {
  const [value, setValue] = useState<string[]>(['comments']);

  return (
    <div className="w-full max-w-2xl">
      <p className="mb-3 font-medium text-fg-base" id="checkbox-card-preview-label">
        有効にする機能を選択
      </p>
      <CheckboxCard
        isDisabled={false}
        isInvalid={false}
        labelId="checkbox-card-preview-label"
        onChange={setValue}
        options={options}
        value={value}
      />
    </div>
  );
}
