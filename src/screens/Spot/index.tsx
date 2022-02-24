import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Typography} from '../../components';

const {Title} = Typography;
const SportScreen = () => {
  return (
    <Layout>
      <View style={styles.box}>
        <Title>Coming soon!</Title>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SportScreen;
