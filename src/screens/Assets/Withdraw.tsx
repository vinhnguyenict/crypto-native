import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {
  Layout,
  Container,
  Typography,
  Card,
  CardBody,
  Button,
  Divider,
} from '../../components';

import {
  CardChain,
  AccountType,
  SelectToken,
  WithdrawForm,
  WithdrawInternalForm,
} from './components';
import {ChevronLeftIcon, FileTextIcon} from '../../styles/icons';

const {Title, Text} = Typography;

const FirstRoute = () => {
  const {colors} = useTheme();
  const {width} = useWindowDimensions();
  return (
    <View style={{position: 'relative', marginTop: 10}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: 100,
        }}
      >
        <Container>
          <SelectToken />

          <CardChain />

          <WithdrawForm />

          <CardReminder />
        </Container>
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.highlight,
          position: 'absolute',
          bottom: 0,
          width: width,
        }}
      >
        <Container style={{marginTop: 10, marginBottom: 10}}>
          <View style={[styles.flexSpace, {marginBottom: 10}]}>
            <Text>Arrived amount</Text>
            <Text type="primary">0 USDT</Text>
          </View>
          <Button type="primary" style={{flex: 1}}>
            <Text>Submit</Text>
          </Button>
        </Container>
      </View>
    </View>
  );
};

const SecondRoute = () => {
  const {colors} = useTheme();
  const {width} = useWindowDimensions();
  return (
    <View style={{position: 'relative', marginTop: 10}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: 100,
        }}
      >
        <Container>
          <SelectToken />

          <AccountType />

          <WithdrawInternalForm />

          <CardReminder />
        </Container>
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.highlight,
          position: 'absolute',
          bottom: 0,
          width: width,
        }}
      >
        <Container style={{marginTop: 10, marginBottom: 10}}>
          <View style={[styles.flexSpace, {marginBottom: 10}]}>
            <Text>Arrived amount</Text>
            <Text type="primary">0 USDT</Text>
          </View>
          <Button type="primary" style={{flex: 1}}>
            <Text>Submit</Text>
          </Button>
        </Container>
      </View>
    </View>
  );
};

const WithdrawScreen = () => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [index, setIndexTab] = useState<number>(0);
  const [routes] = useState<any>([
    {key: 'withdraw', title: 'Withdraw'},
    {
      key: 'internal',
      title: 'Internal Funds Transfer',
      accessibilityLabel: '(0 Fee)',
    },
  ]);

  const renderScene = SceneMap({
    withdraw: FirstRoute,
    internal: SecondRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.primary}}
      activeColor={colors.primary}
      inactiveColor={colors.text}
      tabStyle={{width: 'auto'}}
      style={{backgroundColor: 'transparent'}}
      renderLabel={({route, color}) => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color, margin: 5}} bold={true} size="large">
            {route.title}
          </Text>

          {route.accessibilityLabel && (
            <Text type="danger" bold={true}>
              {route.accessibilityLabel || ''}
            </Text>
          )}
        </View>
      )}
    />
  );

  return (
    <Layout>
      <Container style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Image source={ChevronLeftIcon} style={{tintColor: colors.text}} />
          </View>
        </TouchableOpacity>
        <Title level={3}>Withdraw</Title>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <Image
              source={FileTextIcon}
              style={{tintColor: colors.text, height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>
      </Container>
      <Divider />

      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndexTab}
        initialLayout={{height: 0, width}}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const CardReminder = () => {
  return (
    <Card>
      <CardBody>
        <Text size="large">Reminders</Text>
        <Text>
          1. Please don't deposit other digital assets except BTC to the above
          address. Any asset other than BTC will be unrecoverable
        </Text>
        <Text type="danger">
          2. Any deposits less than the minimun amount of 0.001BTC will not be
          credited or refunded.
        </Text>
        <Text type="danger">
          3. Sorry, TRC20-USDT only supper Transfer. Any deposits transferred
          from other smart futures are note supported for now.
        </Text>
        <Text>
          4. Depositing to the above address will arrive after 1 network
          confirmations.
        </Text>
        <Text>Make sure your mobile is secure to protect your data.</Text>
      </CardBody>
    </Card>
  );
};

export default WithdrawScreen;
