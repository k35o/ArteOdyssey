'use client';

import { Heading, Separator } from '@k8o/arte-odyssey';
import { useTranslation } from '../i18n';

export function Theming() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <Heading type="h1">{t('nav.theming')}</Heading>
      <Separator color="mute" />
    </div>
  );
}
