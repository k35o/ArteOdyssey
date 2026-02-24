'use client';

import { Anchor } from '@k8o/arte-odyssey';
import type { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { localizeHref, useLocale } from '../i18n';

type LocaleAnchorProps = PropsWithChildren<{
  path: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}>;

export const LocaleAnchor: FC<LocaleAnchorProps> = ({
  path,
  className,
  onClick,
  children,
}) => {
  const locale = useLocale();
  const href = localizeHref(path, locale);

  return (
    <Anchor
      href={href}
      renderAnchor={
        className !== undefined || onClick !== undefined
          ? (props) => (
              <a
                className={className ?? props.className}
                href={props.href}
                onClick={onClick}
              >
                {props.children}
              </a>
            )
          : undefined
      }
    >
      {children}
    </Anchor>
  );
};
