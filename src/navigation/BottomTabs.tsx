import React from 'react';
import {useTheme} from 'styled-components';
import {StyleSheet, Image, View} from 'react-native';
import {
  HomeIcon,
  SportIcon,
  FuturesIcon,
  CopyTradeIcon,
  AssetsIcon,
} from '../styles/icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  SpotScreen,
  FuturesScreen,
  AssetsScreen,
  CopyTradeScreen,
} from '../screens';
import {NAVIGATES} from '../config';

const Tab = createBottomTabNavigator();

const ButtonTabs = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATES.HOME}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.highlight,
        },
      }}
    >
      <Tab.Screen
        name={NAVIGATES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={HomeIcon}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {tintColor: focused ? colors.primary : colors.text},
                ]}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name={NAVIGATES.SPOT}
        component={SpotScreen}
        options={{
          tabBarLabel: 'Spot',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={SportIcon}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {tintColor: focused ? colors.primary : colors.text},
                ]}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name={NAVIGATES.FUTURES}
        component={FuturesScreen}
        options={{
          tabBarLabel: 'Futures',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  position: 'absolute',
                  top: -15,
                  backgroundColor: colors.highlight,
                  borderRadius: 1000,
                  paddingTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Image
                  source={FuturesIcon}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    {
                      height: 35,
                      width: 35,
                      tintColor: focused ? colors.primary : colors.text,
                    },
                  ]}
                />
              </View>
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name={NAVIGATES.COPY_TRADE}
        component={CopyTradeScreen}
        options={{
          tabBarLabel: 'CopyTrade',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={CopyTradeIcon}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {tintColor: focused ? colors.primary : colors.text},
                ]}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name={NAVIGATES.ASSETS}
        component={AssetsScreen}
        options={{
          tabBarLabel: 'Assets',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={AssetsIcon}
                resizeMode="contain"
                style={[
                  styles.icon,
                  {tintColor: focused ? colors.primary : colors.text},
                ]}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export default ButtonTabs;
