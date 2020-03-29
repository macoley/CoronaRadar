import React, { PureComponent } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import { Colors } from '../../../resources';

interface IState {
  backgroundColor: string;
  statusBar: boolean;
}

export default class FullScreenWrapper extends PureComponent<{}, IState> {
  public state = { backgroundColor: '#614ad3', statusBar: true };

  public render() {
    const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : undefined;

    return (
      <>
        <StatusBar
          animated={true}
          // hidden={this.state.statusBar}
          barStyle={this.state.statusBar ? 'light-content' : 'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <KeyboardAvoidingView style={styles.container} behavior={keyboardBehavior}>
          <ScrollView
            style={[styles.scrollView, { backgroundColor: this.state.backgroundColor }]}
            keyboardShouldPersistTaps={'always'}
            contentInsetAdjustmentBehavior='automatic'
            onScroll={this.onStartScroll}
            // scrollEventThrottle={40}
            scrollEventThrottle={150}
            showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.wrapper}>{this.props.children}</View>
            </SafeAreaView>
          </ScrollView>
        </KeyboardAvoidingView>
      </>
    );
  }

  private onStartScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y < 300) {
      this.setState({
        backgroundColor: '#614ad3',
      });
    } else {
      this.setState({
        backgroundColor: 'white',
      });
    }

    if (event.nativeEvent.contentOffset.y < 400) {
      this.setState({
        statusBar: true,
      });
    } else {
      this.setState({
        statusBar: false,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#614ad3',
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
