import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import QRCode from 'react-native-qrcode-svg';
import {
  Layout,
  Container,
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Divider,
} from '../../components';

import {CardChain, SelectToken} from './components';
import {ChevronLeftIcon, FileTextIcon} from '../../styles/icons';

const {Title, Text} = Typography;

const DepositScreen = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Layout>
      <Container style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Image source={ChevronLeftIcon} style={{tintColor: colors.text}} />
          </View>
        </TouchableOpacity>
        <Title level={3}>Deposit</Title>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Image
              source={FileTextIcon}
              style={{tintColor: colors.text, height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
      </Container>
      <Divider />
      <Container>
        <SelectToken />

        <CardChain />

        <Card>
          <CardHeader>
            <Text size="large">BTC deposit address</Text>
            <View style={styles.flexSpace}>
              <Text>123344Bs8IFFSSS332232DV</Text>
              <Button type="primary" size="small">
                <Text>Copy</Text>
              </Button>
            </View>
          </CardHeader>
          <CardBody>
            <View style={{alignItems: 'center'}}>
              <View style={styles.qrcode}>
                <QRCode
                  value="vinhnguyenict"
                  logoBackgroundColor="transparent"
                />
              </View>

              <Button type="primary" size="small">
                <Text>Save</Text>
              </Button>
            </View>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Text size="large">Reminders</Text>
            <Text>
              1. Please don't deposit other digital assets except BTC to the
              above address. Any asset other than BTC will be unrecoverable
            </Text>
            <Text type="danger">
              2. Any deposits less than the minimun amount of 0.001BTC will not
              be credited or refunded.
            </Text>
            <Text type="danger">
              3. Sorry, TRC20-USDT only supper Transfer. Any deposits
              transferred from other smart futures are note supported for now.
            </Text>
            <Text>
              4. Depositing to the above address will arrive after 1 network
              confirmations.
            </Text>
            <Text>Make sure your mobile is secure to protect your data.</Text>
          </CardBody>
        </Card>
      </Container>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qrcode: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default DepositScreen;
