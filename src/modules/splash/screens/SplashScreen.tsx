import React, { PureComponent } from 'react';
import { Image, StyleSheet, View, StatusBar } from 'react-native';

import { Images } from '../../../resources';
import FullScreenWrapper from '../../welcome/organisms/FullScreenWrapper';

interface IProps {
  moveToDashboardScreen: () => void;
}

export default class SplashScreen extends PureComponent<IProps> {
  public componentDidMount() {
    setTimeout(() => {
      this.props.moveToDashboardScreen();
    }, 100);
  }

  public render() {
    return (
      <FullScreenWrapper backgroundColor={'#121B74'}>
        <StatusBar hidden={false} barStyle={'light-content'} backgroundColor={'#121B74'} translucent={true} />
        <View style={styles.container}>
          <Image style={styles.image} source={Images.logo} />
        </View>
      </FullScreenWrapper>
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
    height: 120,
    width: 95,
  },
});
