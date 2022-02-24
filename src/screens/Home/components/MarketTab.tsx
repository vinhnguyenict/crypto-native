import React, {useState} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {Typography, Card, CardBody, Divider} from '../../../components';

import CoinList from './CoinList';

const {Text} = Typography;

const Favorites = () => {
  return (
    <View style={{position: 'relative'}}>
      <Divider style={styles.divider} />
      <CoinList />
    </View>
  );
};

const Futures = () => {
  return (
    <View style={{position: 'relative'}}>
      <CoinList />
    </View>
  );
};

const Spot = () => {
  return (
    <View style={{position: 'relative'}}>
      <CoinList />
    </View>
  );
};

const WithdrawScreen = () => {
  const {width, height} = useWindowDimensions();
  const {colors} = useTheme();
  const [index, setIndexTab] = useState<number>(0);

  const [routes] = useState<any>([
    {key: 'favorites', title: 'Favorites'},
    {key: 'futures', title: 'Futures'},
    {key: 'spot', title: 'Spot'},
  ]);

  const renderScene = SceneMap({
    favorites: Favorites,
    futures: Futures,
    spot: Spot,
  });

  const _renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.primary}}
      activeColor={colors.primary}
      inactiveColor={colors.text}
      tabStyle={{width: 'auto'}}
      style={{backgroundColor: 'transparent'}}
      renderLabel={({route, color}) => (
        <Text style={{color}} bold={true}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <Card>
      <CardBody>
        <View style={{minHeight: height}}>
          <TabView
            navigationState={{index, routes}}
            renderTabBar={_renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndexTab}
            initialLayout={{height: 0, width}}
          />
        </View>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  divider: {
    // position: 'absolute',
    // width: '100%',
    // top: 0,
  },
});

export default WithdrawScreen;
