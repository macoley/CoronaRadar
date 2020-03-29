import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import { Colors } from '../../../resources';

export default class FullScreenWrapper extends PureComponent {
  public render() {
    const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : undefined;

    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent={true} />
        <KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
          <ScrollView
            style={styles.scrollView}
            keyboardShouldPersistTaps={'always'}
            contentInsetAdjustmentBehavior='automatic'
            showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.wrapper}>{this.props.children}</View>
            </SafeAreaView>
          </ScrollView>
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
    backgroundColor: 'blue',
  },
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    minHeight: 800,
    backgroundColor: Colors.appBackground,
  },
  toolbarContent: {
    paddingTop: 40,
  },
});
