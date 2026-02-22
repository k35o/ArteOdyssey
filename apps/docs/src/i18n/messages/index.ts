import type { Locale } from '../types';
import type { MessageKey } from './en';
import { en } from './en';
import { ja } from './ja';

export const messages: Record<Locale, Record<MessageKey, string>> = {
  en,
  ja,
};
