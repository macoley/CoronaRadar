import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import NavigationService from '../services/NavigationService';

import SplashScreen from '../modules/splash/screens/SplashScreen';
import AppNavigator from './AppNavigator';
import WelcomeScreen from '../modules/welcome/screens/WelcomeScreen';
import LoadingScreen from '../modules/loading/screens/LoadingScreen';
import ChangeLocationContainer from '../modules/change-location/containers/ChangeLocationContainer';

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      [NavigationService.RouteNames.SplashScreen]: SplashScreen,
      [NavigationService.RouteNames.AppNavigator]: AppNavigator,
      [NavigationService.RouteNames.WelcomeScreen]: WelcomeScreen,
      [NavigationService.RouteNames.ChangeLocationScreen]: ChangeLocationContainer,
      [NavigationService.RouteNames.LoadingScreen]: LoadingScreen,
    },
    {
      initialRouteName: NavigationService.RouteNames.SplashScreen,
    },
  ),
);
