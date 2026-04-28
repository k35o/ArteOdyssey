import { type FC, Fragment } from 'react';

import { findAllColors } from './../../../helpers/color/find-all-colors';

export const Code: FC<{
  children: string;
}> = ({ children }) => {
  const colors = findAllColors(children);

  if (colors.length === 0) {
    return (
      <code className="bg-bg-mute m-0.5 rounded-md px-1.5 sm:py-0.5">
        {children}
      </code>
    );
  }

  // 各色の前にカラースウォッチを挿入してコンテンツを構築
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const [index, colorInfo] of colors.entries()) {
    // 色の前のテキストを追加
    if (colorInfo.start > lastIndex) {
      parts.push(children.slice(lastIndex, colorInfo.start));
    }

    // 色のテキストの前にカラースウォッチを追加
    parts.push(
      <Fragment key={`color-${String(index)}`}>
        <span
          aria-label={`Color: ${colorInfo.color}`}
          className="border-border-base inline-block size-3 shrink-0 rounded-sm border"
          role="img"
          style={{ backgroundColor: colorInfo.color }}
        />
        {children.slice(colorInfo.start, colorInfo.end)}
      </Fragment>,
    );

    lastIndex = colorInfo.end;
  }

  // 残りのテキストを追加
  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex));
  }

  return (
    <code className="bg-bg-mute m-0.5 inline-flex items-center gap-1 rounded-md px-1.5 sm:py-0.5">
      {parts}
    </code>
  );
};
