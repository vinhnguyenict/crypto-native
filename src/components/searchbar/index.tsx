import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {Input} from '../';
import {SearchIcon} from '../../styles/icons';

import {NAVIGATES} from '../../config';

const SearchBard = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  const handleClickSearch = () => {
    // Open navigate search
    navigation.navigate(NAVIGATES.SEARCH);
  };

  return (
    <View style={[styles.searchBox]}>
      <TouchableOpacity onPress={handleClickSearch}>
        <View style={{position: 'relative'}}>
          <Image
            source={SearchIcon}
            resizeMode="contain"
            style={[styles.iconSearch, {tintColor: colors.text}]}
          />
          <Input
            placeholder="Search"
            placeholderTextColor={colors.text}
            style={[styles.inputSearch]}
            bordered={true}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  avatar: {
    width: 25,
    height: 25,
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchBox: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  iconSearch: {
    position: 'absolute',
    zIndex: 9,
    width: 15,
    height: 15,
    top: 10,
    left: 10,
  },
  inputSearch: {
    height: 32,
    paddingLeft: 30,
  },
});
export default SearchBard;
