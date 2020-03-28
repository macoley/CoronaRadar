import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import NavigationService from '../services/NavigationService';

import SplashScreen from '../modules/splash/screens/SplashScreen';
import AppNavigator from './AppNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      [NavigationService.RouteNames.SplashScreen]: SplashScreen,
      [NavigationService.RouteNames.AppNavigator]: AppNavigator,
    },
    {
      initialRouteName: NavigationService.RouteNames.SplashScreen,
    },
  ),
);
