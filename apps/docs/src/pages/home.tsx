'use client';

import { Heading, LinkButton, Separator } from '@k8o/arte-odyssey';
import { BlogIcon, GitHubIcon } from '@k8o/arte-odyssey/icons';
import { useTranslation } from '../i18n';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-4">
        <Heading type="h1">{t('home.title')}</Heading>
        <p className="text-fg-mute text-lg">{t('home.description')}</p>
      </div>
      <Separator />
      <div className="flex gap-4">
        <LinkButton
          href="https://github.com/k35o/ArteOdyssey"
          openInNewTab
          size="md"
          startIcon={<GitHubIcon />}
          variant="outlined"
        >
          {t('home.github')}
        </LinkButton>
        <LinkButton
          href="https://main--67a0dc0a614a725e3b2a1cee.chromatic.com"
          openInNewTab
          size="md"
          startIcon={<BlogIcon />}
          variant="contained"
        >
          {t('home.storybook')}
        </LinkButton>
      </div>
    </div>
  );
}
