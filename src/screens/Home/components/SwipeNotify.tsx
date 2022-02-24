import React, {useRef, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  Dimensions,
  Image,
} from 'react-native';

import {Typography, Card, CardBody} from '../../../components';
import {NotifyIcon} from '../../../styles/icons';

const {Text} = Typography;
const {width} = Dimensions.get('window');

const data = [
  {
    message:
      '[Winner Announcement] Bitget Sports League match 6 (Inter VS Juventus)',
  },
  {
    message:
      'Bitget Will Support the Reserve Rights (RSR) Contract Address Migration',
  },

  {
    message:
      'Bitget Concludes First Session of Launchpad and Lists Contents Shopper Token (CST) in the Innovation Zone',
  },
];

const CarouselItem = ({item}: any) => {
  return (
    <View style={styles.cardView}>
      <Text numberOfLines={1}>{item.message}</Text>
    </View>
  );
};

const SwipeNotify = () => {
  const scrollX = new Animated.Value(0);
  const flatListRef = useRef<FlatList>(null);

  let position = Animated.divide(scrollX, width);

  const infiniteScroll = useCallback(() => {
    if (flatListRef && flatListRef.current) {
      const numberOfData = data.length;
      let scrollValue = 0,
        scrolled = 0;

      setInterval(function () {
        scrolled++;
        if (scrolled < numberOfData) {
          scrollValue = scrollValue + width;
        } else {
          scrollValue = 0;
          scrolled = 0;
        }
        flatListRef?.current?.scrollToOffset({
          animated: true,
          offset: scrollValue,
        });
      }, 3000);
    }
  }, [flatListRef]);

  useEffect(() => {
    infiniteScroll();
  }, [infiniteScroll]);

  return (
    <Card>
      <CardBody style={styles.wrapper}>
        <View style={styles.notifyIcon}>
          <Image source={NotifyIcon} style={{height: 15, width: 15}} />
        </View>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(_, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
          )}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 5,
                  width: 5,
                  backgroundColor: '#595959',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </CardBody>
    </Card>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
  },
  notifyIcon: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotView: {
    position: 'absolute',
    bottom: 10,
    width: width - 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardView: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SwipeNotify;
