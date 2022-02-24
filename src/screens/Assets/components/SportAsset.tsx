import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Typography, Card, CardHeader, CardBody} from '../../../components';

const {Text} = Typography;

const Spot = () => {
  return (
    <Card>
      <CardHeader>
        <View style={styles.flex}>
          <Text>OK</Text>

          <Text>OK</Text>
        </View>
      </CardHeader>
      <CardBody>
        <View style={{position: 'relative'}}>
          <Text>Spot</Text>
        </View>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
  },
});

export default Spot;
