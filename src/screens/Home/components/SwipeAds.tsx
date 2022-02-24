import React, {useRef, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Animated,
  Dimensions,
  Image,
} from 'react-native';

const {width} = Dimensions.get('window');

const data = [
  {
    image: require('../../../assets/images/ads/ads-1.png'),
  },
  {
    image: require('../../../assets/images/ads/ads-2.png'),
  },
];

const CarouselItem = ({item}: any) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.image} />
    </View>
  );
};

const SwipeAds = () => {
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
    <View style={styles.wrapper}>
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
                height: 10,
                width: 10,
                backgroundColor: '#595959',
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  dotView: {
    position: 'absolute',
    bottom: 10,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardView: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    resizeMode: 'stretch',
    width: width - 20,
    height: 150,
  },
});

export default SwipeAds;
