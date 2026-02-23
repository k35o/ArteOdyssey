import type { FC } from 'react';
import { codeToHtml } from 'shiki';

type Props = {
  code: string;
  lang: 'bash' | 'ts' | 'tsx';
};

export const CodeBlock: FC<Props> = async ({ code, lang }) => {
  const html = await codeToHtml(code, {
    lang,
    theme: 'min-light',
  });

  return (
    <div
      className="[&_code]:text-sm [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border-mute [&_pre]:p-4"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki generates safe HTML from code input
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
