import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useTheme} from 'styled-components';
import {TabView, TabBar} from 'react-native-tab-view';
import {Typography, Card, CardBody, Divider} from '../../../components';
// import FuturesAsset from './FuturesAsset';
// import SpotAsset from './SportAsset';
import {ChevronRightIcon} from '../../../styles/icons';

const {Text, Title} = Typography;

const Futures = () => {
  return (
    <View style={{position: 'relative'}}>
      <Text>Futures asset value (BTC)</Text>
      <Title
        level={5}
        style={{
          marginTop: 10,
          marginBottom: 0,
        }}
      >
        * * * * * * * *
      </Title>
    </View>
  );
};

const Spot = () => {
  return (
    <View style={{position: 'relative'}}>
      <Text>Spot asset value (BTC)</Text>
      <Title
        level={5}
        style={{
          marginTop: 10,
          marginBottom: 0,
        }}
      >
        * * * * * * * *
      </Title>
      <View>
        <Text numberOfLines={1}>
          BGB payments will enjoy 10% discount on transaction
        </Text>
      </View>
    </View>
  );
};

const AssetsTab = () => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();

  const [index, setIndexTab] = useState<number>(0);
  const [routes] = useState<any>([
    {key: 'spot', title: 'Spot'},
    {key: 'futures', title: 'Futures'},
  ]);

  const _renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={[
        styles.indicator,
        {
          backgroundColor: colors.primary,
        },
      ]}
      activeColor={colors.primary}
      inactiveColor={colors.text}
      tabStyle={{
        width: 'auto',
      }}
      contentContainerStyle={styles.contentContainer}
      style={{
        backgroundColor: 'transparent',
      }}
      renderLabel={({route, color}) => (
        <Title style={{color}} level={2}>
          {route.title}
        </Title>
      )}
    />
  );

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <TabView
            navigationState={{index, routes}}
            renderTabBar={props => {
              return (
                <View style={styles.tab}>
                  {_renderTabBar(props)}
                  <TouchableOpacity style={styles.action}>
                    <Text>Bill</Text>
                    <View style={styles.icon}>
                      <Image
                        source={ChevronRightIcon}
                        style={[styles.chevron, {tintColor: colors.text}]}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider}>
                    <Divider />
                  </View>
                </View>
              );
            }}
            renderScene={() => null}
            onIndexChange={setIndexTab}
            initialLayout={{height: 0, width}}
          />

          {index === 0 ? <Spot /> : null}
          {index === 1 ? <Futures /> : null}
        </CardBody>
      </Card>

      {/* {index === 0 ? <SpotAsset /> : null}
      {index === 1 ? <FuturesAsset /> : null} */}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  tab: {
    position: 'relative',
  },
  indicator: {top: 35},
  contentContainer: {
    top: -10,
  },
  action: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    top: 5,
  },
  icon: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chevron: {
    height: 15,
    width: 15,
  },
  divider: {
    position: 'absolute',
    width: '100%',
    bottom: 5,
  },
});

export default AssetsTab;
