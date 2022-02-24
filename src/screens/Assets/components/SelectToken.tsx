import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Typography, Card, CardBody} from '../../../components';

import {ChevronRightIcon} from '../../../styles/icons';
import {COINS} from '../../../styles/images';

const {Title} = Typography;

const SelectToken = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <Card>
      <CardBody>
        <View style={styles.flexSpace}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={COINS.BTC} />
            <Title level={3} style={{marginLeft: 5}}>
              BTC
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
  );
};

const styles = StyleSheet.create({
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default SelectToken;
