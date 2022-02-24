import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

import {useTheme} from 'styled-components';
import {Layout, Typography, Container, Divider} from '../../components';

import {ChevronRightIcon, ChevronLeftIcon} from '../../styles/icons';

const {Text, Title} = Typography;

const PreferenceSettings = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Layout>
      <Container>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <View>
              <Image
                source={ChevronLeftIcon}
                style={{tintColor: colors.text}}
              />
            </View>
          </TouchableOpacity>

          <View>
            <Title level={2}>Preference Settings</Title>
          </View>
        </View>
      </Container>
      <Divider />
      <ScrollView>
        <Container>
          <Text style={styles.title}>Notification</Text>
          <TouchableOpacity style={styles.wrapper}>
            <View style={styles.setting}>
              <Title level={1}>Notification Language</Title>
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
            <Text style={styles.small}>
              Platform notification will be according to language selected
            </Text>
          </TouchableOpacity>

          <Divider />
          <TouchableOpacity style={styles.wrapper}>
            <View style={styles.setting}>
              <Title level={1}>Notification Type</Title>
              <View style={styles.flexCenter}>
                <Text>Turned on</Text>
                <View style={styles.icon}>
                  <Image
                    source={ChevronRightIcon}
                    style={[styles.chevron, {tintColor: colors.text}]}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.small}>
              SMS is restricted in some areas, it is recommended to use email
              notification to receive
            </Text>
          </TouchableOpacity>

          <Divider />
          <Text style={styles.title}>Order second confirmation</Text>
          <View style={[styles.wrapper, styles.setting]}>
            <Title level={1}>Limit order confirmation</Title>
            <View style={styles.flexCenter}>
              <Switch
                value={true}
                style={{transform: [{scaleX: 0.89}, {scaleY: 0.7}]}}
              />
            </View>
          </View>
          <Divider />
          <View style={[styles.wrapper, styles.setting]}>
            <Title level={1}>Flash order confirmation</Title>
            <View style={styles.flexCenter}>
              <Switch
                value={true}
                style={{transform: [{scaleX: 0.89}, {scaleY: 0.7}]}}
              />
            </View>
          </View>
          <Divider />
          <View style={[styles.wrapper, styles.setting]}>
            <Title level={1}>Trigger Order</Title>
            <View style={styles.flexCenter}>
              <Switch
                value={true}
                style={{transform: [{scaleX: 0.89}, {scaleY: 0.7}]}}
              />
            </View>
          </View>
          <Divider />
          <View style={[styles.wrapper, styles.setting]}>
            <Title level={1}>TP/SL</Title>
            <View style={styles.flexCenter}>
              <Switch
                value={true}
                style={{transform: [{scaleX: 0.89}, {scaleY: 0.7}]}}
              />
            </View>
          </View>

          <Divider />
          <Text style={styles.title}>Futures Setting</Text>
          <TouchableOpacity style={styles.wrapper}>
            <View style={styles.setting}>
              <Title level={1}>Futures Unit Setting</Title>
              <View style={styles.flexCenter}>
                <Text>Quantity unit</Text>
                <View style={styles.icon}>
                  <Image
                    source={ChevronRightIcon}
                    style={[styles.chevron, {tintColor: colors.text}]}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <Divider />
          <TouchableOpacity style={styles.wrapper}>
            <View style={styles.setting}>
              <Title level={1}>Unrealized P/L</Title>
              <View style={styles.flexCenter}>
                <Text>Market Price</Text>
                <View style={styles.icon}>
                  <Image
                    source={ChevronRightIcon}
                    style={[styles.chevron, {tintColor: colors.text}]}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <Divider />
          <View style={[styles.wrapper, styles.setting]}>
            <Title level={1}>Whether include pending orders</Title>
            <View style={styles.flexCenter}>
              <Switch
                value={true}
                style={{transform: [{scaleX: 0.89}, {scaleY: 0.7}]}}
              />
            </View>
          </View>
          <Divider />
          <TouchableOpacity style={styles.wrapper}>
            <View style={styles.setting}>
              <Title level={1}>Percent Setting</Title>
              <View style={styles.flexCenter}>
                <View style={styles.icon}>
                  <Image
                    source={ChevronRightIcon}
                    style={[styles.chevron, {tintColor: colors.text}]}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    left: 0,
  },
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
  },
  small: {
    marginTop: 5,
    fontSize: 10,
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

export default PreferenceSettings;
