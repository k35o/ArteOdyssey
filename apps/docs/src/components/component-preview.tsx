import type { FC, ReactNode } from 'react';

import { CodeBlock } from './code-block';

type Props = {
  children: ReactNode;
  code: string;
  lang?: 'tsx' | 'ts';
};

export const ComponentPreview: FC<Props> = ({
  children,
  code,
  lang = 'tsx',
}) => (
  <div className="flex flex-col overflow-hidden rounded-xl shadow-sm">
    <div className="border-border-mute bg-bg-base flex flex-wrap items-center gap-4 border-b p-6">
      {children}
    </div>
    <CodeBlock code={code} lang={lang} rounded="bottom" />
  </div>
);
