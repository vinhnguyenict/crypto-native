/**
 * Splash screen
 */
import React, {useEffect, useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {ILogo, ISplashDark, ISplashLight} from '../../styles/images';

import {ThemeContext, ETheme} from '../../contexts/ThemeContext';
import {NAVIGATES} from '../../config';

import {Typography} from '../../components';

const {Title} = Typography;

const SplashScreen = () => {
  const navigation = useNavigation();
  const {theme, setTheme} = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const _theme = await AsyncStorage.getItem('@theme');
      setTheme((_theme as ETheme) || 'light');
      setIsLoading(false);

      setTimeout(() => {
        navigation.navigate(NAVIGATES.APP);
      }, 1000);
    })();
  }, [navigation, setTheme]);

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size={'large'} color={'#F0E270'} />
      </View>
    );
  }

  return (
    <ImageBackground
      source={theme === 'dark' ? ISplashDark : ISplashLight}
      style={styles.background}
    >
      <View style={styles.content}>
        <View style={styles.logo}>
          <Image source={ILogo} />
        </View>

        <View style={styles.slogan}>
          <Title level={2}>Better trading, better life.</Title>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 0.7,
    justifyContent: 'center',
  },
  slogan: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
});

export default SplashScreen;
