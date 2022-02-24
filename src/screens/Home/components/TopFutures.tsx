import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Typography, Card, CardBody} from '../../../components';

const {Text, Title} = Typography;

const TopFutures = () => {
  return (
    <Card>
      <CardBody>
        <View style={[styles.row, styles.flexSpace]}>
          <TouchableOpacity style={styles.block}>
            <Text bold={true}>BTCUSDT</Text>
            <Text size="small">Futures</Text>
            <Title type="primary">$ 35977</Title>
            <Text type="primary" bold={true}>
              3.22 %
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block}>
            <Text bold={true}>BTCUSDT</Text>
            <Text size="small">Futures</Text>
            <Title type="primary">$ 35977</Title>
            <Text type="primary" bold={true}>
              3.22 %
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.block}>
            <Text bold={true}>BGB/USDT</Text>
            <Text size="small">Futures</Text>
            <Title type="primary">$ 35977</Title>
            <Text type="primary" bold={true}>
              +3.22 %
            </Text>
          </TouchableOpacity>
        </View>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flexSpace: {
    justifyContent: 'space-between',
  },
  block: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopFutures;
