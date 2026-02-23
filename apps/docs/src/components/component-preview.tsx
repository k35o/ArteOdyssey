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
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-4 rounded-t-lg border border-border-mute p-6">
        {children}
      </div>
      <div className="[&_pre]:rounded-t-none [&_pre]:border-t-0">
        <CodeBlock code={code} lang={lang} />
      </div>
    </div>
  );
};
