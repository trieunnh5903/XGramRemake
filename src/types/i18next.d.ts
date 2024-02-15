import vi from '../translations/resources/vi';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof vi.common;
      language: typeof vi.languages;
      on_boarding: typeof vi.on_boarding;
    };
  }
}
