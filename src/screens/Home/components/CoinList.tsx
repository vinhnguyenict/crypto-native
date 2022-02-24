import React from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {Typography, Button} from '../../../components';
const {Text, Title} = Typography;

const CoinList = () => {
  const coins = new Array(50).fill(undefined);

  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View style={{paddingBottom: 180}}>
        {coins.map((_, index) => {
          return (
            <TouchableOpacity key={index} style={styles.box}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
              >
                <View style={{flex: 0.4}}>
                  <Title level={2}>BTCUSDT</Title>
                  <Text size="small">Vol209,557</Text>
                </View>
                <View style={{flex: 0.4}}>
                  <Title level={2}>$35708.5</Title>
                  <Text size="small">$2497.72</Text>
                </View>
                <View>
                  <Button type="primary">
                    <Text bold={true}>+4.97%</Text>
                  </Button>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 7,
    marginBottom: 7,
  },
});

export default CoinList;
