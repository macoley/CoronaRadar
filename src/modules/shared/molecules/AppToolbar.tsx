import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Images } from '../../../resources';
import NavigationService from '../../../services/NavigationService';

interface IProps {
  backButtonVisible?: boolean;
  title: string;
}

export const toolbarHeight = 54;

export class AppToolbar extends PureComponent<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goBack} style={styles.backButtonContainer}>
          <Image style={styles.backButton} source={Images.iconChevronLeft} />
        </TouchableOpacity>
      </View>
    );
  }

  private goBack = () => NavigationService.goBack();
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: toolbarHeight,
  },
  backButtonContainer: {
    alignItems: 'center',
    height: toolbarHeight,
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    width: toolbarHeight,
  },
  backButton: {
    height: 24,
    width: 24,
  },
});
