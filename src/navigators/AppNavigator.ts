import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from '../services/NavigationService';

import BottomTabNavigator from './BottomTabNavigator';

export default createStackNavigator(
  {
    [NavigationService.RouteNames.BottomTabNavigator]: BottomTabNavigator,
  },
  {
    headerMode: 'none',
    initialRouteName: NavigationService.RouteNames.BottomTabNavigator,
  },
);
