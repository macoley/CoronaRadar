import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { Colors } from '../../../resources';
import { Progress } from '../atoms';
import { AppToolbar, toolbarHeight } from '../molecules/AppToolbar';

export enum StatusBarTheme {
  Dark = 'dark-content',
  Light = 'light-content',
}

interface IProps {
  title: string;
  scrollView?: boolean;
  loading?: boolean;
  toolbar?: React.ReactElement<JSX.Element>;
  bounce?: boolean;
  footer?: React.ReactElement<JSX.Element>;
  persistsTaps?: boolean;
}

export class ScreenWrapper extends PureComponent<IProps> {
  public render() {
    const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

    return (
      <>
        <StatusBar barStyle={StatusBarTheme.Light} backgroundColor={'black'} translucent={false} />
        <SafeAreaView style={styles.topSafeArea}>
          {this.props.toolbar ? this.props.toolbar : <AppToolbar title={this.props.title} />}
        </SafeAreaView>
        <KeyboardAvoidingView style={styles.container} behavior={behavior}>
          {this.props.scrollView ? (
            <ScrollView
              style={styles.container}
              keyboardShouldPersistTaps={this.props.persistsTaps ? 'always' : 'never'}
              bounces={this.props.bounce}
              showsVerticalScrollIndicator={false}>
              {this.props.children}
              <Progress loading={this.props.loading ? this.props.loading : false} />
            </ScrollView>
          ) : (
            <SafeAreaView style={styles.container}>
              {this.props.children}
              <Progress loading={this.props.loading ? this.props.loading : false} />
            </SafeAreaView>
          )}
          {this.props.footer}
        </KeyboardAvoidingView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  toolbarContent: {
    paddingTop: toolbarHeight,
  },
});
