import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image, TouchableOpacity, Switch} from 'react-native';

import {useTheme} from 'styled-components';
import {Layout, Typography, Container, Divider} from '../../components';

import {ChevronRightIcon, ChevronLeftIcon} from '../../styles/icons';

const {Text, Title} = Typography;

const Security = () => {
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
            <Title level={2}>Security</Title>
          </View>
        </View>
      </Container>
      <Divider />
      <Container>
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.setting}>
            <Title level={1}>Login password</Title>
            <View style={styles.flexCenter}>
              <Text>Modify</Text>
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
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.setting}>
            <Title level={1}>Email</Title>
            <View style={styles.flexCenter}>
              <Text type="primary">Link</Text>
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
            <Title level={1}>Google Authenticator</Title>
            <View style={styles.flexCenter}>
              <Text type="primary">Link</Text>
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
      <Divider />
      <Container>
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.setting}>
            <Title level={1}>Fund password</Title>
            <View style={styles.flexCenter}>
              <Text type="primary">Setting</Text>
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
            <Title level={1}>Anti-phishing Code</Title>
            <View style={styles.flexCenter}>
              <Text type="primary">Setting</Text>
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
      <Divider />
      <Container>
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.setting}>
            <Title level={1}>Account activity</Title>
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
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.setting}>
            <Title level={1}>Equipment management</Title>
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
        <View style={[styles.wrapper, styles.setting]}>
          <Title level={1}>Touch ID</Title>
          <View style={styles.flexCenter}>
            <Switch
              value={true}
              style={{transform: [{scaleX: 0.89}, {scaleY: 0.7}]}}
            />
          </View>
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
});

export default Security;
