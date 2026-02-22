'use client';

import { useNavigate } from '@funstack/router';
import { useEffect } from 'react';
import { detectLocale } from '../i18n';

export function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${detectLocale()}/`, { replace: true });
  }, [navigate]);

  return null;
}
