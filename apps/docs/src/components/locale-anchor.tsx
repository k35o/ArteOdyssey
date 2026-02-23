'use client';

import { Anchor } from '@k8o/arte-odyssey';
import type { FC, PropsWithChildren } from 'react';
import { localizeHref, useLocale } from '../i18n';

export const LocaleAnchor: FC<PropsWithChildren<{ path: string }>> = ({
  path,
  children,
}) => {
  const locale = useLocale();
  return <Anchor href={localizeHref(path, locale)}>{children}</Anchor>;
};
