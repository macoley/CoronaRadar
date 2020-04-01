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
        <StatusBar
          hidden={false}
          barStyle={'dark-content'}
          backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'white'}
          translucent={this.props.backgroundColor === undefined}
        />
        <KeyboardAvoidingView
          style={[
            styles.container,
            { backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white' },
          ]}
          behavior={keyboardBehavior}>
          <SafeAreaView
            style={[
              styles.safeArea,
              { backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white' },
            ]}>
            <View
              style={[
                styles.wrapper,
                { backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white' },
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
