import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import NavigationService from '../services/NavigationService';

import AppNavigator from './AppNavigator';
import WelcomeContainer from '../modules/welcome/containers/WelcomeContainer';
import LoadingScreen from '../modules/loading/screens/LoadingScreen';
import ChangeLocationContainer from '../modules/change-location/containers/ChangeLocationContainer';
import SplashContainer from '../modules/splash/containers/SplashContainer';

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      [NavigationService.RouteNames.SplashScreen]: SplashContainer,
      [NavigationService.RouteNames.AppNavigator]: AppNavigator,
      [NavigationService.RouteNames.WelcomeScreen]: WelcomeContainer,
      [NavigationService.RouteNames.ChangeLocationScreen]: ChangeLocationContainer,
      [NavigationService.RouteNames.LoadingScreen]: LoadingScreen,
    },
    {
      initialRouteName: NavigationService.RouteNames.SplashScreen,
    },
  ),
);
