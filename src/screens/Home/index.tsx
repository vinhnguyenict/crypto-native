import React from 'react';
import {ScrollView} from 'react-native';
import {Layout, Container} from '../../components';
import {
  Header,
  SwipeAds,
  SwipeNotify,
  Features,
  TopFutures,
  Express,
  MarketTab,
} from './components';

const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <Container>
        <ScrollView nestedScrollEnabled={true} stickyHeaderIndices={[6]}>
          <Header />
          <SwipeAds />
          <SwipeNotify />
          <Features />
          <TopFutures />
          <Express />
          <MarketTab />
        </ScrollView>
      </Container>
    </Layout>
  );
};

export default React.memo(HomeScreen);
