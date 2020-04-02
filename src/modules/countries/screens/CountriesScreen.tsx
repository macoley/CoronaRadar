import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';

import FullScreenWrapper from '../organisms/FullScreenWrapper';
import { Images } from '../../../resources';
import NavigationService from '../../../services/NavigationService';
import { Summary } from '../../../models/Summary';

const placeholder12 = 'Confirmed cases by country';
const placeholder14 = 'Most infected';

interface IProps {
  summary: Summary[];
}

export default class CountriesScreen extends PureComponent<IProps> {
  public componentDidMount() {
    StatusBar.setBarStyle('dark-content');
  }

  public componentWillUnmount() {
    StatusBar.setBarStyle('light-content');
  }

  public render() {
    return (
      <FullScreenWrapper>
        {/* CONFIRMED BY COUNTRY */}
        <View style={[styles.wrapper, styles.section, styles.lastSection]}>
          <TouchableOpacity onPress={this.onBack} style={styles.navbar}>
            <Image source={Images.arrowLeft} />
          </TouchableOpacity>
          <Text style={[styles.textHeader, styles.textDark]}>{placeholder12}</Text>
          <View style={styles.sectionWrapper}>
            {this.props.summary ? (
              <View style={[styles.listRow, styles.listRowRed]}>
                <Text style={[styles.textBold, styles.textLight]}>{this.props.summary[0].country}</Text>
                <Text style={[styles.textBold, styles.textLight]}>{placeholder14}</Text>
                <Text style={[styles.textBold, styles.textLight]}>{this.props.summary[0].confirmed}</Text>
              </View>
            ) : null}
            {this.props.summary.slice(1, 20).map((summary, index) => (
              <View key={index} style={styles.listRow}>
                <Text style={[styles.textBold, styles.textDark]}>{summary.country}</Text>
                <Text style={[styles.textBold, styles.textRed]}>{summary.confirmed}</Text>
              </View>
            ))}
          </View>
        </View>
      </FullScreenWrapper>
    );
  }

  private onBack = () => {
    NavigationService.goBack();
  };
}

const styles = StyleSheet.create({
  navbar: {
    marginBottom: 24,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionWrapper: {
    marginVertical: 16,
  },
  listRow: {
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#f5f7fa',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listRowRed: {
    backgroundColor: '#ff0660',
  },
  lastSection: {
    marginBottom: 48,
  },
});
