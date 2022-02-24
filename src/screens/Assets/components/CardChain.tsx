import React from 'react';
import {View} from 'react-native';
import {Typography, Card, CardBody, Button} from '../../../components';

const {Text} = Typography;

const CardChain = () => {
  return (
    <Card>
      <CardBody>
        <Text size="large">Chain name</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Button type="primary" size="small">
            <Text>BTC</Text>
          </Button>
          <Button style={{marginLeft: 10}} size="small">
            <Text>BEP20(BSC)</Text>
          </Button>
        </View>
      </CardBody>
    </Card>
  );
};

export default CardChain;
