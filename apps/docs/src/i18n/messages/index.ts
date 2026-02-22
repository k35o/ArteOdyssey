import type { Locale, MessageKey } from '../types';
import { en } from './en';
import { ja } from './ja';

export const messages: Record<Locale, Record<MessageKey, string>> = {
  en,
  ja,
};
