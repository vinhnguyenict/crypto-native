import React, {useState, useMemo} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import config from '../styles/theme';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const STORAGE_KEY = '@theme';
export type ETheme = 'dark' | 'light';

interface IState {
  theme: ETheme;
  setTheme(them: 'dark' | 'light'): void;
}

export const ThemeContext = React.createContext<IState>({
  theme: 'light',
  setTheme: () => {},
});

const AppThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState<ETheme>('light');

  const data = useMemo(() => {
    return {
      ...config,
      theme,
      colors: config.colors[theme],
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <StatusBar
        animated={true}
        barStyle={`${theme === 'dark' ? 'light' : 'dark'}-content`}
        showHideTransition="fade"
      />
      <ThemeProvider theme={data}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default AppThemeProvider;
