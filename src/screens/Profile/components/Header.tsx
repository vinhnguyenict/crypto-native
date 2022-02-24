import React, {useContext} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from 'styled-components';
import {Container} from '../../../components';
import {
  ChevronLeftIcon,
  LightModeIcon,
  DarkModeIcon,
} from '../../../styles/icons';

import {ThemeContext} from '../../../contexts/ThemeContext';

const HomeHeader = () => {
  const {colors} = useTheme();
  const {theme, setTheme} = useContext(ThemeContext);
  const navigation = useNavigation();

  const changeTheme = async () => {
    const _theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(_theme);
    await AsyncStorage.setItem('@theme', _theme);
  };

  return (
    <React.Fragment>
      <Container>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <Image
                source={ChevronLeftIcon}
                style={{tintColor: colors.text}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={changeTheme}>
            <View>
              <Image
                source={theme === 'dark' ? LightModeIcon : DarkModeIcon}
                style={{tintColor: colors.text, height: 20, width: 20}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeHeader;
