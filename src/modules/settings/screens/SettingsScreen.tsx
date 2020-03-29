import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

import FullScreenWrapper from '../../cities/organisms/FullScreenWrapper';
import NavigationService from '../../../services/NavigationService';

const placeholder1 = 'Settings';

const placeholder5 = '1 663';

const placeholder13 = 'Italy';
const placeholder14 = 'Most infected';
const placeholder15 = 'Show more';

interface IProps {
  navigation: any;
}

export default class SettingsScreen extends PureComponent<IProps> {
  public componentDidMount() {
    this.props.navigation.setParams({
      onFocus: () => {
        StatusBar.setHidden(false);
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
            <View style={[styles.listRow, styles.listRowRed]}>
              <Text style={[styles.textBold, styles.textLight]}>{placeholder13}</Text>
              <Text style={[styles.textBold, styles.textLight]}>{placeholder14}</Text>
              <Text style={[styles.textBold, styles.textLight]}>{placeholder5}</Text>
            </View>
            <View style={styles.listRow}>
              <Text style={[styles.textBold, styles.textDark]}>{placeholder13}</Text>
              <Text style={[styles.textBold, styles.textRed]}>{placeholder5}</Text>
            </View>
            <View style={styles.listRow}>
              <Text style={[styles.textBold, styles.textDark]}>{placeholder13}</Text>
              <Text style={[styles.textBold, styles.textRed]}>{placeholder5}</Text>
            </View>
            <View style={styles.listRow}>
              <Text style={[styles.textBold, styles.textDark]}>{placeholder13}</Text>
              <Text style={[styles.textBold, styles.textRed]}>{placeholder5}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onPressCitiesButton}>
            <View style={styles.borderedButton}>
              <Text style={[styles.textCaption, styles.textRed]}>{placeholder15}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </FullScreenWrapper>
    );
  }

  private onPressCitiesButton = () => {
    NavigationService.navigate(NavigationService.RouteNames.CitiesScreen);
  };
}

const styles = StyleSheet.create({
  locationWidget: {
    backgroundColor: '#614ad3',
    borderBottomLeftRadius: 48,
    paddingTop: 32,
    marginBottom: 58,
  },
  comfirmedContainer: {
    marginTop: 28,
    padding: 16,
    paddingRight: 164, // 196 (image width) - 32
    backgroundColor: '#ff0660',
    borderRadius: 16,
    flexDirection: 'column',
  },
  doctorImage: {
    position: 'absolute',
    bottom: 0,
    right: -32,
  },
  footer: {
    marginTop: 16,
    marginBottom: -58,
    paddingHorizontal: 32 - 8,
    flex: 1,
    flexDirection: 'row',
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
    // font-family: SFProText;
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 48,
  },
  textBold: {
    // font-family: SFProText;
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
  },
  textNormal: {
    // font-family: SFProText;
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
  },
  textSubheader: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  textSpace: {
    marginTop: 18,
  },
  textMedium: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  textCaption: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  anchorContainer: {
    flexDirection: 'row',
  },
  anchor: {
    borderColor: '#ff0660',
    borderBottomWidth: 2,
  },
  comfirmedAmountContainer: {
    backgroundColor: '#b21f66',
    paddingHorizontal: 14,
    lineHeight: 32,
    height: 32,
    justifyContent: 'center',
    marginRight: 12,
    borderRadius: 8,
  },
  comfirmedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  box: {
    height: 117,
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderColor: '#EAE9F3',
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'column',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxAmount: {
    backgroundColor: '#f5f7fa',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
  },
  section: {
    marginTop: 28,
  },
  iconLive: {
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  marginRight: {
    marginRight: 8,
  },
  iconLiveSmaller: {
    position: 'absolute',

    width: 4,
    height: 4,
    backgroundColor: '#ff0660',
    borderRadius: 50,
  },
  iconLiveBigger: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 6, 96, 0.2)',
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxGrid: {
    marginHorizontal: -8,
    marginTop: 16,
  },
  boxRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  boxWide: {
    height: 88,
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
  borderedButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff0660',
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastSection: {
    marginBottom: 48,
  },
});
