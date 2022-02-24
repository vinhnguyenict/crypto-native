import React from 'react';
import {View} from 'react-native';
import {Typography, Card, CardBody} from '../../../components';

const {Text} = Typography;

const Futures = () => {
  return (
    <Card>
      <CardBody>
        <View style={{position: 'relative'}}>
          <Text>Futures</Text>
        </View>
      </CardBody>
    </Card>
  );
};

export default Futures;
