import type { FC } from 'react';
import { codeToHtml } from 'shiki';

type Props = {
  code: string;
  lang: 'bash' | 'ts' | 'tsx';
};

export const CodeBlock: FC<Props> = async ({ code, lang }) => {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: 'min-light',
      dark: 'min-dark',
    },
    defaultColor: false,
  });

  return (
    <div
      className="[&_.shiki]:bg-(--shiki-light-bg)! dark:[&_.shiki]:bg-(--shiki-dark-bg)! [&_.shiki_span]:text-(--shiki-light)! dark:[&_.shiki_span]:text-(--shiki-dark)! [&_code]:text-sm [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:shadow-sm [&_pre]:focus-visible:outline-hidden [&_pre]:focus-visible:ring-2 [&_pre]:focus-visible:ring-border-info [&_pre]:focus-visible:ring-inset"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
