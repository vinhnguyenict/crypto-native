import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {SearchBard} from '../../../components';
import {
  UserIcon,
  ScanIcon,
  HelpCenterIcon,
  MailIcon,
} from '../../../styles/icons';
import {NAVIGATES} from '../../../config';

const HomeHeader = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATES.PROFILE)}
          >
            <Image
              source={UserIcon}
              resizeMode="contain"
              style={[styles.avatar, {tintColor: colors.primary}]}
            />
          </TouchableOpacity>
        </View>
        <SearchBard />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate(NAVIGATES.SCAN)}>
            <Image
              source={ScanIcon}
              resizeMode="contain"
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={HelpCenterIcon}
              resizeMode="contain"
              style={[styles.icon, {tintColor: colors.text, marginLeft: 20}]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={MailIcon}
              resizeMode="contain"
              style={[styles.icon, {tintColor: colors.text, marginLeft: 20}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
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
});

export default HomeHeader;
