import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {useTheme} from 'styled-components';
import {
  Typography,
  Card,
  CardBody,
  Input,
  Form,
  FormControl,
} from '../../../components';

import {ChevronRightIcon} from '../../../styles/icons';

const {Text} = Typography;

const WithdrawInternalForm = () => {
  const {colors} = useTheme();
  return (
    <Card>
      <CardBody>
        <Form>
          <FormControl>
            <Text size="large">Account number</Text>
            <View>
              <Input placeholder="Please provide your E-mail" />
            </View>
          </FormControl>

          <FormControl style={{marginTop: 15}}>
            <Text size="small">Withdrawal amount</Text>
            <View>
              <Input placeholder="Minimum withdrawal amount: 2" />
            </View>
            <View style={[styles.flex, styles.spaceBetween, {marginTop: 5}]}>
              <Text size="small">Available 0.0000000 USD</Text>
              <View style={[styles.flex]}>
                <TouchableOpacity>
                  <Text type="primary" size="small">
                    To raise limit
                  </Text>
                </TouchableOpacity>
                <View style={styles.icon}>
                  <Image
                    source={ChevronRightIcon}
                    style={[styles.chevron, {tintColor: colors.primary}]}
                  />
                </View>
              </View>
            </View>
          </FormControl>

          <FormControl style={{marginTop: 15}}>
            <Text bold={true}>Fee</Text>
            <View style={[styles.flex, styles.spaceBetween, {marginTop: 5}]}>
              <Text size="large" fontWeight={1}>
                Free
              </Text>
              <Text>USDT</Text>
            </View>
          </FormControl>
        </Form>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chevron: {
    height: 12,
    width: 12,
  },
});

export default WithdrawInternalForm;
