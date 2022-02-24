import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Switch} from 'react-native';

import {useTheme} from 'styled-components';

import {Typography} from '../../../components';
import {ChevronRightIcon} from '../../../styles/icons';

const {Text, Title} = Typography;

const Settings = () => {
  const {colors} = useTheme();

  return (
    <React.Fragment>
      <View style={[styles.wrapper, styles.setting]}>
        <Title level={1}>Using BGB to pay for fees</Title>
        <View style={styles.flexCenter}>
          <Switch style={{transform: [{scaleX: 0.89}, {scaleY: 0.7}]}} />
        </View>
      </View>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.setting}>
          <Title level={1}>Language</Title>
          <View style={styles.flexCenter}>
            <Text>English</Text>
            <View style={styles.icon}>
              <Image
                source={ChevronRightIcon}
                style={[styles.chevron, {tintColor: colors.text}]}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.setting}>
          <Title level={1}>Rewards Center</Title>
          <View style={styles.icon}>
            <Image
              source={ChevronRightIcon}
              style={[styles.chevron, {tintColor: colors.text}]}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.setting}>
          <Title level={1}>Share app</Title>
          <View style={styles.icon}>
            <Image
              source={ChevronRightIcon}
              style={[styles.chevron, {tintColor: colors.text}]}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.setting}>
          <Title level={1}>Help Center</Title>
          <View style={styles.icon}>
            <Image
              source={ChevronRightIcon}
              style={[styles.chevron, {tintColor: colors.text}]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    height: 20,
    width: 50,
  },
  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chevron: {
    height: 15,
    width: 15,
  },
});

export default Settings;
