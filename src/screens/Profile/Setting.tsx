import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {useTheme} from 'styled-components';
import {Layout, Typography, Container, Divider, Button} from '../../components';

import {ChevronRightIcon, ChevronLeftIcon} from '../../styles/icons';

const {Text, Title} = Typography;

const SettingScreen = () => {
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
            <Title level={2}>Setting</Title>
          </View>
        </View>
      </Container>
      <Divider />
      <Container>
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.setting}>
            <Title level={1}>Pricing method</Title>
            <View style={styles.flexCenter}>
              <Text>USD</Text>
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
            <Title level={1}>Phone</Title>
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
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.setting}>
            <Title level={1}>Color</Title>
            <View style={styles.flexCenter}>
              <Text>Green up and red down</Text>
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
            <Title level={1}>Version</Title>
            <View style={styles.flexCenter}>
              <Text>1.2.23</Text>
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
            <Title level={1}>Network detection</Title>
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

        <View style={styles.signOut}>
          <Button>
            <Text>Sign out</Text>
          </Button>
        </View>
      </Container>
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
  signOut: {
    marginTop: 50,
  },
});

export default SettingScreen;
