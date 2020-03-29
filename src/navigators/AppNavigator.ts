import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from '../services/NavigationService';

import BottomTabNavigator from './BottomTabNavigator';
import CitiesScreen from '../modules/cities/screens/CitiesScreen';

export default createStackNavigator(
  {
    [NavigationService.RouteNames.BottomTabNavigator]: BottomTabNavigator,
    [NavigationService.RouteNames.CitiesScreen]: CitiesScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: NavigationService.RouteNames.BottomTabNavigator,
  },
);
