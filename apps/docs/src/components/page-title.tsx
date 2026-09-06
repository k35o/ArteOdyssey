'use client';

import type { FC } from 'react';

import type { MessageKey } from '../i18n';
import { useTranslation } from '../i18n';

type Props = { name: string } | { k: MessageKey };

/**
 * ページの <title>。React 19 が木のどこにあっても head に持ち上げるので、
 * ページは見出しと同じ場所に書く。ルートレイアウトは title を持たない
 * （同時に画面にあるのは 1 つだけ、が規則）。
 */
export const PageTitle: FC<Props> = (props) => {
  const { t } = useTranslation();
  const name = 'name' in props ? props.name : t(props.k);
  return <title>{`${name} · k8ordo`}</title>;
};
