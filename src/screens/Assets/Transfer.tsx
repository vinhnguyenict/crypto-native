import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {
  Layout,
  Container,
  Typography,
  Card,
  CardBody,
  Divider,
  Form,
  FormControl,
  Input,
} from '../../components';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
  SwapIcon,
} from '../../styles/icons';
import {COINS} from '../../styles/images';

const {Title, Text} = Typography;

const TransferScreen = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Layout>
      <Container style={[styles.row, styles.space]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Image source={ChevronLeftIcon} style={{tintColor: colors.text}} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Image
              source={FileTextIcon}
              style={{tintColor: colors.text, height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
      </Container>
      {/* <Divider /> */}
      <Container>
        <Title level={4} style={{marginTop: 10, marginBottom: 10}}>
          Transfer
        </Title>
        <Card>
          <CardBody>
            <Text style={{marginLeft: 5, marginBottom: 5}}>Coin</Text>
            <View style={[styles.row, styles.space]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={COINS.USDT} />
                <Title level={3} style={{marginLeft: 5}}>
                  USDT
                </Title>
              </View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View>
                  <Image
                    source={ChevronRightIcon}
                    style={{tintColor: colors.text}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <View style={[styles.row, {alignItems: 'center'}]}>
              <View style={styles.col1}>
                <Text numberOfLines={1}>From</Text>
              </View>

              <View style={{width: '100%'}}>
                <TouchableOpacity>
                  <Text bold={true} fontWeight={3}>
                    USDT-M
                  </Text>
                  <Text>USDT</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.row, styles.space]}>
              <View style={styles.col1} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 0.8}}>
                  <Divider />
                </View>
                <TouchableOpacity
                  style={{
                    flex: 0.2,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  <Image
                    source={SwapIcon}
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.row, styles.space]}>
              <View style={styles.col1}>
                <Text numberOfLines={1}>To</Text>
              </View>

              <View style={{width: '100%'}}>
                <TouchableOpacity>
                  <Text bold={true} fontWeight={3}>
                    Spot
                  </Text>
                  <Text>USDT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Form>
              <FormControl>
                <Text size="small">Transfer amount</Text>
                <View style={[styles.row, styles.space]}>
                  <Input placeholder="Enter amount" bordered={false} />
                  <TouchableOpacity>
                    <Text type="primary" size="large">
                      All
                    </Text>
                  </TouchableOpacity>
                </View>
              </FormControl>
            </Form>
          </CardBody>
        </Card>

        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text size="small">Transfer limit: 0.0000000 USDT</Text>
          <Text size="small">Remaining trial fund 5.00000000 USDT</Text>
        </View>

        {/* <Card>
          <CardBody>
            <Text size="large">Reminders</Text>
            <Text>
              1. Please don't deposit other digital assets except BTC to the
              above address. Any asset other than BTC will be unrecoverable
            </Text>
            <Text>
              2. Any deposits less than the minimun amount of 0.001BTC will not
              be credited or refunded.
            </Text>
          </CardBody>
        </Card> */}
      </Container>
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  space: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  col1: {
    width: '15%',
  },
});

export default TransferScreen;
