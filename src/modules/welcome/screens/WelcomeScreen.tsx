import 'firebase/auth';
import 'firebase/firestore';

import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-navigation';

import { Styles } from '../../../resources';

export default class WelcomeScreen extends PureComponent {
  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.headerText} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    ...Styles.heading1,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  image: {
    height: 251,
    width: 251,
    marginTop: 70,
    marginBottom: 70,
  },
});
