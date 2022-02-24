import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {useTheme} from 'styled-components';
import {Typography, Card, CardBody} from '../../../components';
import {ILaunchpad, ICommunity, IReward, IBGB} from '../../../styles/images';

const {Text} = Typography;

const Features = () => {
  const {fontSizes} = useTheme();

  return (
    <Card>
      <CardBody style={styles.wrapper}>
        <TouchableOpacity style={styles.feature}>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Image
              source={ILaunchpad}
              style={[styles.icon, {height: 50, width: 50}]}
            />
          </View>
          <Text style={[styles.text, {fontSize: fontSizes[0]}]}>Launchpad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feature}>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Image source={ICommunity} style={styles.icon} />
          </View>
          <Text style={[styles.text, {fontSize: fontSizes[0]}]}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feature}>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Image source={IReward} style={styles.icon} />
          </View>
          <Text style={[styles.text, {fontSize: fontSizes[0]}]}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feature}>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Image source={IBGB} style={styles.icon} />
          </View>
          <Text style={[styles.text, {fontSize: fontSizes[0]}]}>BGB</Text>
        </TouchableOpacity>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  feature: {
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    height: 35,
    width: 35,
  },
  text: {
    textAlign: 'center',
  },
});
export default Features;
