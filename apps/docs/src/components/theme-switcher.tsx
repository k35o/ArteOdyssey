'use client';

import { IconButton } from '@k8o/arte-odyssey';
import { DarkModeIcon, LightModeIcon } from '@k8o/arte-odyssey/icons';
import { useTranslation } from '../i18n';
import { useTheme } from '../theme/context';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <IconButton
      label={
        theme === 'light'
          ? t('common.switchToDarkMode')
          : t('common.switchToLightMode')
      }
      onClick={toggleTheme}
    >
      {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
