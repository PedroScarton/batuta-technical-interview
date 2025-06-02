import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['en'],
    load: 'languageOnly', // all, languageOnly

    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
      requestOptions: {
        cache: 'no-store',
      },
    },

    defaultNS: 'common',
    fallbackNS: 'common',
    ns: ['common', 'auth'],

    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',

    saveMissing: false,
    debug: false,

    cache: 'no-store',

    // react-i18next options
    react: {
      useSuspense: true,
    },
  });

export default i18n;
