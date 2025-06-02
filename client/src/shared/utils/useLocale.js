import { useCallback } from 'react';

import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const AVAILABLE_LOCALES = ['en', 'es'];

export default function useLocale() {
  const { i18n } = useTranslation();
  const setNewLocale = useCallback(
    lng => {
      if (AVAILABLE_LOCALES.includes(lng)) {
        changeLanguage(lng);
      }
    },
    [changeLanguage]
  );

  return {
    locale: i18n.language || 'es',
    locales: AVAILABLE_LOCALES,
    setLanguage: setNewLocale,
  };
}
