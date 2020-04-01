import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { PulseIndicator } from 'react-native-indicators';
import FullScreenWrapper from '../../welcome/organisms/FullScreenWrapper';

export default class LoadingScreen extends PureComponent {
  public componentDidMount() {
    StatusBar.setBarStyle('dark-content');
  }

  public componentWillUnmount() {
    StatusBar.setBarStyle('light-content');
  }

  public render() {
    return (
      <FullScreenWrapper>
        <View style={styles.container}>
          <PulseIndicator color='#121b74' />
        </View>
      </FullScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
