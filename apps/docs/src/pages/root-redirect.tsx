'use client';

import { useNavigate } from '@funstack/router';
import { detectLocale } from '../i18n';

export function RootRedirect() {
  const navigate = useNavigate();
  navigate(`/${detectLocale()}/`, { replace: true });

  return null;
}
