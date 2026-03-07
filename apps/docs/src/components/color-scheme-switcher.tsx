'use client';

import { IconButton } from '@k8o/arte-odyssey';
import { DarkModeIcon, LightModeIcon } from '@k8o/arte-odyssey/icons';
import { useEffect, useState } from 'react';

type ColorScheme = 'light' | 'dark';

const STORAGE_KEY = 'arte-odyssey-color-scheme';

function getInitialColorScheme(): ColorScheme {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyColorScheme(scheme: ColorScheme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(scheme);
}

export function ColorSchemeSwitcher() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    getInitialColorScheme,
  );

  useEffect(() => {
    applyColorScheme(colorScheme);
    localStorage.setItem(STORAGE_KEY, colorScheme);
  }, [colorScheme]);

  const toggle = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <IconButton
      label={colorScheme === 'light' ? 'Dark Mode' : 'Light Mode'}
      onClick={toggle}
      size="sm"
    >
      {colorScheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
