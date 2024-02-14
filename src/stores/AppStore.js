import {Images} from '@/assets/images';
import i18n from '@/translations/i18n';
import {makeAutoObservable} from 'mobx';

export default class AppStore {
  languages = [
    {
      name: 'English',
      code: 'en',
      flag: Images.english_flag,
      isSelected: i18n.language === 'en',
    },
    {
      name: 'Tiếng Việt',
      code: 'vi',
      flag: Images.vietnamese_flag,
      isSelected: i18n.language === 'vi',
    },
  ];

  showLanguageSheet = false;
  constructor() {
    makeAutoObservable(this);
  }

  setLanguageCode(code) {
    i18n.changeLanguage(code);
    this.languages.forEach(language => {
      language.isSelected = language.code === code;
    });
  }

  setShowLanguageSheet(value) {
    this.showLanguageSheet = value;
  }

  get currentLanguage() {
    return this.languages.filter(lang => lang.isSelected === true);
  }
}
