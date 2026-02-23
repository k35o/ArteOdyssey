'use client';

import { Heading, LinkButton, Separator } from '@k8o/arte-odyssey';
import { BlogIcon, GitHubIcon } from '@k8o/arte-odyssey/icons';
import { STORYBOOK_URL } from '../constants';
import { useTranslation } from '../i18n';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 p-8">
      <div className="flex flex-col items-center gap-4">
        <Heading type="h1">{t('home.title')}</Heading>
        <p className="text-fg-mute text-lg">{t('home.description')}</p>
      </div>
      <Separator color="mute" />
      <div className="flex gap-6">
        <LinkButton
          color="gray"
          href="https://github.com/k35o/ArteOdyssey"
          openInNewTab
          size="md"
          startIcon={<GitHubIcon />}
          variant="outlined"
        >
          {t('home.github')}
        </LinkButton>
        <LinkButton
          href={STORYBOOK_URL}
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
