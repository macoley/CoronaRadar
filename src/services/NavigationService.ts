import {
  NavigationActions,
  NavigationBackActionPayload,
  NavigationContainerComponent,
  NavigationNavigateActionPayload,
  NavigationPushActionPayload,
  StackActions,
} from 'react-navigation';
import AppNavigator from '../navigators/AppNavigator';

let navigator: NavigationContainerComponent | null = null;

function setTopLevelNavigator(ref: NavigationContainerComponent | null): void {
  navigator = ref;
}

export interface IMainNavigationParams {
  title: string;
}

type NavigationOptions = IMainScreenNavigationOptions;

interface IMainScreenNavigationOptions {
  routeName: RouteNames.AppNavigator;
  params: IMainNavigationParams;
}

function navigate(routeNameOrOptions: string | NavigationOptions): boolean {
  if (!navigator) {
    return false;
  }

  let payload: NavigationNavigateActionPayload = { routeName: '' };

  if (typeof routeNameOrOptions === 'string') {
    payload.routeName = routeNameOrOptions;
  } else {
    payload = routeNameOrOptions;
  }

  return navigator.dispatch(NavigationActions.navigate(payload));
}

function push(routeNameOrOptions: string | NavigationOptions): boolean {
  if (!navigator) {
    return false;
  }

  let payload: NavigationPushActionPayload = { routeName: '' };
  if (typeof routeNameOrOptions === 'string') {
    payload.routeName = routeNameOrOptions;
  } else {
    payload = routeNameOrOptions;
  }

  return navigator.dispatch(StackActions.push(payload));
}

function goBack(options?: NavigationBackActionPayload): boolean {
  if (!navigator) {
    return false;
  }
  return navigator.dispatch(NavigationActions.back(options));
}

enum RouteNames {
  BottomTabNavigator = 'BottomTabNavigator',
  AppNavigator = 'AppNavigator',

  DashboardScreen = 'DashboardScreen',
  CitiesScreen = 'CitiesScreen',
  SettingsScreen = 'SettingsScreen',
  LocationScreen = 'LocationScreen',

  SplashScreen = 'SplashScreen',
  WelcomeScreen = 'WelcomeScreen',
}

export default {
  RouteNames,
  goBack,
  navigate,
  push,
  setTopLevelNavigator,
  navigator,
};
