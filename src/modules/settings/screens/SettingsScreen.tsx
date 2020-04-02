import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Linking, Platform } from 'react-native';

import FullScreenWrapper from '../../countries/organisms/FullScreenWrapper';

const appEmail = 'coronaradarapp@gmail.com';
const changelogUrl = 'https://changelogfy.com/corona-radar/announcements';
const googlePlayId = '';
const appStoreId = '';

const placeholder1 = 'Settings';
const placeholder13 = 'Send feedback';
const placeholder14 = 'Rate app';
const placeholder15 = 'Changelog';

interface IProps {
  navigation: any;
}

export default class SettingsScreen extends PureComponent<IProps> {
  public componentDidMount() {
    this.props.navigation.setParams({
      onFocus: () => {
        StatusBar.setBarStyle('dark-content');
      },
    });
  }

  public render() {
    return (
      <FullScreenWrapper>
        {/* CONFIRMED BY COUNTRY */}
        <View style={[styles.wrapper, styles.section, styles.lastSection]}>
          <Text style={[styles.textHeader, styles.textDark]}>{placeholder1}</Text>
          <View style={styles.sectionWrapper}>
            <TouchableOpacity onPress={this.onMailPress}>
              <Text style={[styles.settingsRow, styles.textSubheader, styles.textDark]}>{placeholder13}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onRatePress}>
              <Text style={[styles.settingsRow, styles.textSubheader, styles.textDark]}>{placeholder14}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onChangelogPress}>
              <Text style={[styles.settingsRow, styles.textSubheader, styles.textDark]}>{placeholder15}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </FullScreenWrapper>
    );
  }

  private onMailPress = () => {
    const subject = 'Corona Radar App Feedback';
    const url = `mailto:${appEmail}?subject=${subject}`;

    Linking.canOpenURL(url).then(
      supported => {
        if (supported) {
          // tslint:disable-next-line: no-floating-promises
          Linking.openURL(url);
        }
      },
      // tslint:disable-next-line: no-console
      err => console.log(err),
    );
  };

  private onRatePress = () => {
    const url =
      Platform.OS === 'ios'
        ? `itms-apps://itunes.apple.com/us/app/id${appStoreId}?mt=8`
        : `market://details?id=${googlePlayId}`;

    Linking.canOpenURL(url).then(
      supported => {
        if (supported) {
          // tslint:disable-next-line: no-floating-promises
          Linking.openURL(url);
        }
      },
      // tslint:disable-next-line: no-console
      err => console.log(err),
    );
  };

  private onChangelogPress = () => {
    const url = changelogUrl;

    Linking.canOpenURL(url).then(
      supported => {
        if (supported) {
          // tslint:disable-next-line: no-floating-promises
          Linking.openURL(url);
        }
      },
      // tslint:disable-next-line: no-console
      err => console.log(err),
    );
  };
}

const styles = StyleSheet.create({
  settingsRow: {
    marginVertical: 12,
  },
  wrapper: {
    paddingHorizontal: 32,
  },
  textLight: {
    color: '#ffffff',
  },
  textDark: {
    color: '#121b74',
  },
  textRed: {
    color: '#ff0660',
  },
  textHeader: {
    fontFamily: 'Lato-Black',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 48,
  },
  textBold: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
  },
  textNormal: {
    fontFamily: 'Lato-Semibold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
  },
  textSubheader: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  textSpace: {
    marginTop: 18,
  },
  textMedium: {
    fontFamily: 'Lato-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  textCaption: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  textButton: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  textRegular: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 21,
  },
  section: {
    marginTop: 28,
  },
  sectionWrapper: {
    marginVertical: 16,
  },
  lastSection: {
    marginBottom: 48,
  },
});
