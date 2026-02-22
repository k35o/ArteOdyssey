'use client';

import { Heading, Separator } from '@k8o/arte-odyssey';
import { useTranslation } from '../i18n';

export function Components() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 p-8">
      <Heading type="h1">{t('nav.components')}</Heading>
      <Separator />
    </div>
  );
}
