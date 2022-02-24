import React from 'react';
import {View} from 'react-native';
import {Typography, Card, CardBody, Button} from '../../../components';

const {Text} = Typography;

const AccountType = () => {
  return (
    <Card>
      <CardBody>
        <Text size="large">Account Type</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Button type="primary" size="small">
            <Text>Email</Text>
          </Button>
          <Button style={{marginLeft: 10}} size="small">
            <Text>Phone number</Text>
          </Button>
          <Button style={{marginLeft: 10}} size="small">
            <Text>UID</Text>
          </Button>
        </View>
      </CardBody>
    </Card>
  );
};

export default AccountType;
