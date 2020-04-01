import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import { Colors } from '../../../resources';

interface IProps {
  backgroundColor?: string;
}

export default class FullScreenWrapper extends PureComponent<IProps> {
  public render() {
    const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : undefined;

    return (
      <>
        <StatusBar hidden={false} barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
        <KeyboardAvoidingView
          style={[
            styles.container,
            this.props.backgroundColor ? { backgroundColor: this.props.backgroundColor } : null,
          ]}
          behavior={keyboardBehavior}>
          <SafeAreaView style={styles.safeArea}>
            <View
              style={[
                styles.wrapper,
                this.props.backgroundColor ? { backgroundColor: this.props.backgroundColor } : null,
              ]}>
              {this.props.children}
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  toolbarContent: {
    paddingTop: 40,
  },
});
