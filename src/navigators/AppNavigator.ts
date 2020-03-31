import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from '../services/NavigationService';

import BottomTabNavigator from './BottomTabNavigator';
import CountriesContainer from '../modules/countries/containers/CountriesContainer';

export default createStackNavigator(
  {
    [NavigationService.RouteNames.BottomTabNavigator]: BottomTabNavigator,
    [NavigationService.RouteNames.CountriesScreen]: CountriesContainer,
  },
  {
    headerMode: 'none',
    initialRouteName: NavigationService.RouteNames.BottomTabNavigator,
  },
);
