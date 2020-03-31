import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { PulseIndicator, WaveIndicator } from 'react-native-indicators';
import FullScreenWrapper from '../../welcome/organisms/FullScreenWrapper';

export default class LoadingScreen extends PureComponent {
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
