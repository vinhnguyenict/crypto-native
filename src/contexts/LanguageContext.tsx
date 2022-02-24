import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@language';

interface IState {
  language?: string | 'en';
  setLanguage(lan: string): void;
}

const LanguageContext = React.createContext<IState>({
  language: 'en',
  setLanguage: () => {},
});

const LanguageProvider: React.FC = ({children}) => {
  const {i18n} = useTranslation();
  const [language, seLanguage] = useState<string>('en');

  useEffect(() => {
    (async () => {
      const lng = await AsyncStorage.getItem(STORAGE_KEY);
      if (lng && lng !== language) {
        seLanguage(lng);
        i18n.changeLanguage(lng);
      }
    })();
  }, [language, i18n]);

  const handleChangeLanguage = (lng: string) => {
    AsyncStorage.setItem(STORAGE_KEY, lng);
    seLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleChangeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export {LanguageContext, LanguageProvider};

// https://www.youtube.com/watch?v=UD6WkO8-QQo
// import React, {useState, useEffect, useContext} from 'react';
// import en from '../lang/en.json';
// import zh from '../lang/zh.json';
// import * as RNLocalize from 'react-native-localize';
// import App from '../App';

// type LanguageContextType = {
//   hello: string;
// };

// const LanguageContext = React.createContext<LanguageContextType>(
//   {} as LanguageContextType
// );

// const languageObj = {
//   en: en,
//   'zh-Hans-US': zh,
// };

// export const LanguageContextProvider: React.FC = ({children}) => {
//   const [selectedLanguage, setSelectedLanguage] = useState('en');

//   useEffect(() => {
//     const currentLanguage = RNLocalize.findBestAvailableLanguage(
//       Object.keys(languageObj)
//     );

//     setSelectedLanguage(currentLanguage?.languageTag || 'en');
//   }, []);

//   const value = {
//     ...languageObj[selectedLanguage as 'en' | 'zh-Hans-US'],
//   };
//   return (
//     <LanguageContext.Provider value={value}>
//       <App />
//     </LanguageContext.Provider>
//   );
// };

// export const useTranslation = () => useContext(LanguageContext);
