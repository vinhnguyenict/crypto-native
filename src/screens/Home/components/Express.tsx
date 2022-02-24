import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Typography, Card, CardBody} from '../../../components';
import {ChevronRightCircleIcon, PaymentIcon} from '../../../styles/icons';
const {Text, Title} = Typography;

const Express = () => {
  return (
    <Card>
      <CardBody>
        <TouchableOpacity>
          <View style={[styles.row, styles.flexSpace]}>
            <View style={styles.row}>
              <Image
                source={PaymentIcon}
                style={[styles.chevron, {marginRight: 5}]}
              />
              <View>
                <Title>Express</Title>
                <Text size="small">Support USDT, BTC, ETH, ETC...</Text>
              </View>
            </View>
            <Image source={ChevronRightCircleIcon} style={styles.chevron} />
          </View>
        </TouchableOpacity>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexSpace: {
    justifyContent: 'space-between',
  },
  chevron: {
    height: 30,
    width: 30,
  },
});

export default Express;
