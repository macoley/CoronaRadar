import React from 'react';
import { Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Images } from '../resources';
import NavigationService from '../services/NavigationService';
import DashboardContainer from '../modules/dashboard/containers/DashboardContainer';
import SettingsScreen from '../modules/settings/screens/SettingsScreen';

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 24,
    height: 24,
  },
  tabBar: {
    height: 55,
    borderTopColor: 'rgba(18, 27, 116, 0.15)',
  },
});

export default createBottomTabNavigator(
  {
    [NavigationService.RouteNames.DashboardScreen]: DashboardContainer,
    [NavigationService.RouteNames.SettingsScreen]: SettingsScreen,
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: styles.tabBar,
      activeTintColor: '#ff0660',
      inactiveTintColor: 'black',
    },

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ defaultHandler }) => {
        defaultHandler();

        if (navigation.state.params?.onFocus) {
          navigation.state.params.onFocus();
        }
      },
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let icon: ImageSourcePropType;

        switch (routeName) {
          case NavigationService.RouteNames.DashboardScreen:
            icon = Images.iconCompass;
            break;
          case NavigationService.RouteNames.SettingsScreen:
            icon = Images.iconSettings;
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
