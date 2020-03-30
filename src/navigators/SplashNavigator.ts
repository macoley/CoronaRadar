import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import NavigationService from '../services/NavigationService';

import SplashScreen from '../modules/splash/screens/SplashScreen';
import AppNavigator from './AppNavigator';
import WelcomeScreen from '../modules/welcome/screens/WelcomeScreen';
import LocationScreen from '../modules/location/screens/LocationScreen';

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      [NavigationService.RouteNames.SplashScreen]: SplashScreen,
      [NavigationService.RouteNames.AppNavigator]: AppNavigator,
      [NavigationService.RouteNames.WelcomeScreen]: WelcomeScreen,
      [NavigationService.RouteNames.LocationScreen]: LocationScreen,
    },
    {
      initialRouteName: NavigationService.RouteNames.SplashScreen,
    },
  ),
);
