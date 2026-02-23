'use client';

import type { FC } from 'react';
import type { MessageKey } from '../i18n';
import { useTranslation } from '../i18n';

export const T: FC<{ k: MessageKey }> = ({ k }) => {
  const { t } = useTranslation();
  return t(k);
};
