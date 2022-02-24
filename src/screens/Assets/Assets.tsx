import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from 'styled-components';
import {Layout, Container, Typography, Card, Button} from '../../components';
import {AssetsTab} from './components';

import {NAVIGATES} from '../../config';
// import {Picker} from '@react-native-picker/picker';

import {
  DepositIcon,
  WithdrawIcon,
  TransferIcon,
  EyeIcon,
} from '../../styles/icons';
import {IBGCard} from '../../styles/images';

const {Title, Text} = Typography;

const AssetsScreen = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Layout>
      <Container>
        <ScrollView stickyHeaderIndices={[2]}>
          <View style={styles.header}>
            <View>
              <Title level={4}>Asset</Title>
            </View>
          </View>

          <Card
            style={{
              marginTop: 0,
            }}
          >
            <ImageBackground
              source={IBGCard}
              resizeMode="cover"
              imageStyle={{borderRadius: 5}}
              style={styles.background}
            >
              <View style={styles.flexSpace}>
                <View style={styles.flexRow}>
                  <Text size="large" style={{color: colors.white}}>
                    Total asset value (USD)
                  </Text>
                  <Button type="link" style={styles.eye}>
                    <Image
                      source={EyeIcon}
                      style={{tintColor: colors.white, height: 12, width: 12}}
                    />
                  </Button>
                </View>
                <View>
                  {/* <Picker
                  mode="dropdown"
                  enabled={false}
                  selectedValue={selectedLanguage}
                  dropdownIconColor="red"
                  style={{height: 100, width: 200}}
                  itemStyle={{color: 'white', fontSize: 17}}
                  onValueChange={itemValue => setSelectedLanguage(itemValue)}
                >
                  <Picker.Item label="BTC" value="BTC" />
                  <Picker.Item label="USDT" value="USDT" />
                </Picker> */}
                </View>
              </View>

              <Title level={4} style={{color: colors.white}}>
                500000
              </Title>
              <Title level={2} style={{color: colors.white}}>
                ~ $5
              </Title>
            </ImageBackground>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.actionItem}
                onPress={() => {
                  navigation.navigate(NAVIGATES.DEPOSIT);
                }}
              >
                <View style={styles.actionIcon}>
                  <Image
                    source={DepositIcon}
                    style={[styles.icon, {tintColor: colors.text}]}
                  />
                </View>
                <Title level={1} style={styles.actionText}>
                  Deposit
                </Title>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionItem}
                onPress={() => {
                  navigation.navigate(NAVIGATES.WITHDRAW);
                }}
              >
                <View style={styles.actionIcon}>
                  <Image
                    source={WithdrawIcon}
                    style={[styles.icon, {tintColor: colors.text}]}
                  />
                </View>
                <Title level={1} style={styles.actionText}>
                  Withdraw
                </Title>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionItem}
                onPress={() => {
                  navigation.navigate(NAVIGATES.TRANSFER);
                }}
              >
                <View style={styles.actionIcon}>
                  <Image
                    source={TransferIcon}
                    style={[styles.icon, {tintColor: colors.text}]}
                  />
                </View>
                <Title level={1} style={styles.actionText}>
                  Transfer
                </Title>
              </TouchableOpacity>
            </View>
          </Card>

          <AssetsTab />
        </ScrollView>
      </Container>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    marginBottom: 15,
  },
  background: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRow: {flexDirection: 'row', alignItems: 'center'},
  eye: {alignItems: 'center', marginLeft: 10},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  actionItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  actionText: {
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginBottom: 0,
  },
});

export default AssetsScreen;
