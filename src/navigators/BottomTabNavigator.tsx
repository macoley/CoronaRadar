import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Images } from '../resources';
import NavigationService from '../services/NavigationService';
import WelcomeScreen from '../modules/welcome/screens/WelcomeScreen';

export default createBottomTabNavigator(
  {
    [NavigationService.RouteNames.WelcomeScreen]: WelcomeScreen,
    [NavigationService.RouteNames.WelcomeScreen]: WelcomeScreen,
    [NavigationService.RouteNames.WelcomeScreen]: WelcomeScreen,
    [NavigationService.RouteNames.WelcomeScreen]: WelcomeScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
    },
    defaultNavigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={Images.tabBarIcon}
          style={[
            styles.tabBarIcon,
            {
              tintColor: tintColor ? tintColor : undefined,
            },
          ]}
        />
      ),
    }),
  },
);

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 24,
    height: 24,
  },
});
