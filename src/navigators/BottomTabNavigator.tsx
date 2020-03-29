import React from 'react';
import { Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Images } from '../resources';
import NavigationService from '../services/NavigationService';
import DashboardScreen from '../modules/dashboard/screens/DashboardScreen';

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 24,
    height: 24,
  },
  tabBar: {
    height: 60,
    borderTopColor: 'rgba(18, 27, 116, 0.15)',
  },
});

export default createBottomTabNavigator(
  {
    [NavigationService.RouteNames.DashboardScreen]: DashboardScreen,
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: styles.tabBar,
      activeTintColor: '#ff0660',
      inactiveTintColor: 'black',
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let icon: ImageSourcePropType;

        switch (routeName) {
          case NavigationService.RouteNames.DashboardScreen:
            icon = tintColor ? Images.iconCompass : Images.iconCompass;
            break;
          default:
            icon = Images.tabBarIcon;
            break;
        }

        return (
          <Image
            source={icon}
            style={[
              styles.tabBarIcon,
              {
                tintColor: tintColor ? tintColor : undefined,
              },
            ]}
          />
        );
      },
    }),
  },
);
