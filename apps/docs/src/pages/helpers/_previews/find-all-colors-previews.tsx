'use client';

import { findAllColors } from '@k8o/arte-odyssey/helpers/color/find-all-colors';

const sampleText = 'color: #ff0080; background: hsl(280, 70%, 50%)';

export function FindAllColorsPreview() {
  const colors = findAllColors(sampleText);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-fg-mute text-sm">
        Input: <code className="text-fg-base">{sampleText}</code>
      </p>
      <div className="flex flex-wrap gap-2">
        {colors.map((item) => (
          <div className="flex items-center gap-2" key={item.start}>
            <span
              className="inline-block size-4 rounded border border-border-mute"
              style={{ backgroundColor: item.color }}
            />
            <code className="text-sm">{item.color}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
