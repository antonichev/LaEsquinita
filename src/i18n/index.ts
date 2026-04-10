import { createI18n } from 'vue-i18n';
import { en } from './locales/en';
import { es } from './locales/es';
import { ru } from './locales/ru';
import type { Locale } from '../types/locale';

const messages = { es, en, ru } as const;

const i18n = createI18n({
  legacy: false,
  locale: 'es' as Locale,
  fallbackLocale: 'es',
  fallbackWarn: false,
  missingWarn: false,
  messages,
});

export default i18n;
