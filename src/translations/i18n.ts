import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './resources/vi';
import en from './resources/en';

const resources = {
  vi,
  en,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
});

export default i18n;
