import en from './resources/en';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof en.common;
      language: typeof en.languages;
    };
  }
}
