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

  if (className !== undefined) {
    return (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Anchor
      href={href}
      renderAnchor={
        onClick !== undefined
          ? (props) => (
              <a
                className={props.className}
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
