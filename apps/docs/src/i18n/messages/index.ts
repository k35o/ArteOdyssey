import type { Locale } from '../types';
import { en } from './en';
import { ja } from './ja';

export const messages: Record<Locale, Record<string, string>> = {
  en,
  ja,
};
