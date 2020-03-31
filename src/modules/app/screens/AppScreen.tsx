import React from 'react';
import { AppState } from 'react-native';

import SplashNavigator from '../../../navigators/SplashNavigator';
import NavigationService from '../../../services/NavigationService';

interface IProps {
  getSummary: () => void;
  getLiveCountry: () => void;
}

interface IState {
  readonly appState: string;
}

export default class AppScreen extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

  public componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.props.getSummary();
    this.props.getLiveCountry();
  }

  public componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  public render() {
    if (__DEV__) {
      return <SplashNavigator ref={NavigationService.setTopLevelNavigator} />;
    } else {
      return <SplashNavigator ref={NavigationService.setTopLevelNavigator} />;
    }
  }

  private handleAppStateChange = (nextState: string) => {
    this.setState({ appState: nextState });
  };
}
