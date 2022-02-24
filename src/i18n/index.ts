// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';

// import en from './locales/en/translation.json';
// import ko from './locales/ko/translation.json';
// import zh from './locales/zh/translation.json';

// i18n.use(initReactI18next).init({
//   lng: 'en',
//   fallbackLng: 'en',
//   debug: true,
//   resources: {
//     en: {
//       translation: en,
//     },
//     ko: {
//       translation: ko,
//     },
//     zh: {
//       translation: zh,
//     },
//   },
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

import i18next from 'i18next';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        key: 'hello world',
      },
    },
  },
});
export default i18next;
