import en from '@/translations/resources/en';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof en.common;
      language: typeof en.languages;
      on_boarding: typeof en.on_boarding;
      login: typeof en.login;
      register: typeof en.register;
    };
  }
}
