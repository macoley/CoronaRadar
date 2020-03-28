import React from 'react';
import { ActivityIndicator, Platform, ProgressBarAndroid, StyleSheet, View } from 'react-native';

interface IProps {
  loading: boolean;
}

export const Progress = (props: IProps) => {
  return props.loading ? (
    <View style={styles.container}>{Platform.OS === 'ios' ? <ActivityIndicator /> : <ProgressBarAndroid />}</View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    elevation: 5,
  },
});
