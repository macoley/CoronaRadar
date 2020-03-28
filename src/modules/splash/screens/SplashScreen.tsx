import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Images } from '../../../resources';

export default class SplashScreen extends PureComponent {
  public componentDidMount() {
    // Todo
  }

  public render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={Images.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 72,
    width: 72,
  },
});
