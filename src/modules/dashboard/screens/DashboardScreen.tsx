import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

import FullScreenWrapper from '../organisms/FullScreenWrapper';

const placeholder = 'Dashboard';

export default class DashboardScreen extends PureComponent {
  public render() {
    return (
      <FullScreenWrapper>
        <Text>{placeholder}</Text>
      </FullScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
