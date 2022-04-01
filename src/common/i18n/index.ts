import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './en';
import translationDe from './de';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    de: { translation: translationDe },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
