import React from 'react';
import { AppState } from 'react-native';

import SplashNavigator from '../../../navigators/SplashNavigator';
import NavigationService from '../../../services/NavigationService';
import { Summary } from '../../../models/Summary';

interface IProps {
  liveCountryLastFetchDate?: Date;
  liveCountry?: Summary;
  getSummary: () => void;
  getLiveCountry: (countrySlug: string) => void;
  getCountries: () => void;
}

interface IState {
  readonly appState: string;
}

const refreshRate = 60 * 1000; // 1 minute
const liveRate = 10 * 60 * 1000; // 10 minutes

export default class AppScreen extends React.PureComponent<IProps, IState> {
  private refreshInterval?: NodeJS.Timeout;

  constructor(props: IProps) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

  public componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.refreshLiveCountry();
    this.refreshInterval = setInterval(this.refreshLiveCountry, refreshRate);
  }

  public componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    clearInterval(this.refreshInterval!);
  }

  public render() {
    return <SplashNavigator ref={NavigationService.setTopLevelNavigator} />;
  }

  private handleAppStateChange = (nextState: string) => {
    this.setState({ appState: nextState });
  };

  private refreshLiveCountry = () => {
    if (!this.props.liveCountry || !this.props.liveCountryLastFetchDate) {
      return;
    }

    if (Date.now() - new Date(this.props.liveCountryLastFetchDate).getTime() > liveRate) {
      this.props.getLiveCountry(this.props.liveCountry.countrySlug);
    }
  };
}
