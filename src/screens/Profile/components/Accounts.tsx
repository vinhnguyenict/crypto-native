import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import {Typography} from '../../../components';
import {
  SecurityIcon,
  IdVerificationIcon,
  PreferenceIcon,
  SettingIcon,
  BellIcon,
  ScheduleIcon,
  AddressIcon,
  SupportIcon,
} from '../../../styles/icons';

import {NAVIGATES} from '../../../config';

const {Title, Text} = Typography;
const Accounts = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.account}>
        <TouchableOpacity onPress={() => navigation.navigate(NAVIGATES.LOGIN)}>
          <Title level={3}>Login/Sign up</Title>
          <Text>Easy to get digital asset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.col}
          onPress={() => navigation.navigate(NAVIGATES.SECURITY)}
        >
          <View style={styles.image}>
            <Image
              source={SecurityIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            Security
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <View style={styles.image}>
            <Image
              source={IdVerificationIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            ID verification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.col}
          onPress={() => navigation.navigate(NAVIGATES.PREFERENCE_SETTING)}
        >
          <View style={styles.image}>
            <Image
              source={PreferenceIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            Preference
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.col}
          onPress={() => navigation.navigate(NAVIGATES.SETTING)}
        >
          <View style={styles.image}>
            <Image
              source={SettingIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            Setting
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <View style={styles.image}>
            <Image
              source={BellIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            Real-time trade
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <View style={styles.image}>
            <Image
              source={ScheduleIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            Fee Schedule
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <View style={styles.image}>
            <Image
              source={AddressIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            Address
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <View style={styles.image}>
            <Image
              source={SupportIcon}
              style={[styles.icon, {tintColor: colors.text}]}
            />
          </View>
          <Text style={styles.text} numberOfLines={1}>
            Support
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    marginTop: 25,
    marginBottom: 10,
  },
  row: {
    marginTop: 20,

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    width: '25%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
  },
});

export default Accounts;
