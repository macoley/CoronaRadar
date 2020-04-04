import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';

import FullScreenWrapper from '../organisms/FullScreenWrapper';
import { Images } from '../../../resources';
import NavigationService from '../../../services/NavigationService';
import Shadow from '../../../utilities/Shadow';
import { Country } from '../../../models/Country';
import { Summary } from '../../../models/Summary';

const placeholder1 = 'COVID-19 in your\nlocation';
const placeholder2 = 'Poland';
const placeholder3 = 'Change';
const placeholder4 = 'Total comfirmed';
const placeholder5 = '1 663';
const placeholder6 = 'Active';
const placeholder7 = 'Recovered';
const placeholder8 = 'Deaths';
const placeholder9 = 'Global statistics';
const placeholder10 = 'Total';
const placeholder11 = 'Live';
const placeholder12 = 'Confirmed cases by country';
const placeholder14 = 'Most infected';
const placeholder15 = 'Show more';

interface IProps {
  navigation: any;
  summary: Summary[];
  liveCountry: Summary;
  total: Summary;
  moveToChangeLocationScreen: () => void;
}

export default class DashboardScreen extends PureComponent<IProps> {
  public componentDidMount() {
    this.props.navigation.setParams({
      onFocus: () => {
        StatusBar.setBarStyle('light-content');
      },
    });
  }

  public render() {
    const liveActive =
      (this.props.liveCountry?.confirmed ?? 0) -
      (this.props.liveCountry?.deaths ?? 0) -
      (this.props.liveCountry?.recovered ?? 0);

    const totalActive =
      (this.props.total?.confirmed ?? 0) - (this.props.total?.deaths ?? 0) - (this.props.total?.recovered ?? 0);

    return (
      <FullScreenWrapper>
        <View style={styles.locationWidget}>
          <View style={styles.wrapper}>
            <Text style={[styles.textHeader, styles.textLight]}>{placeholder1}</Text>
            <Text style={[styles.textSubheader, styles.textSpace, styles.textLight]}>
              {this.props.liveCountry?.country ?? ''}
            </Text>
            <TouchableOpacity onPress={this.onChangeLocationPress} style={styles.anchorContainer}>
              <View style={styles.anchor}>
                <Text style={[styles.textMedium, styles.textLight]}>{placeholder3}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.comfirmedContainer}>
              <Text style={[styles.textCaption, styles.textLight]}>{placeholder4}</Text>
              <View style={styles.comfirmedRow}>
                <View style={styles.comfirmedAmountContainer}>
                  <Text style={[styles.textCaption, styles.textLight]}>{this.props.liveCountry?.confirmed ?? '-'}</Text>
                </View>
                <Image resizeMode={'center'} source={Images.iconVirus} />
              </View>
              <Image style={styles.doctorImage} source={Images.doctor} />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.box}>
              <Image resizeMode={'center'} source={Images.iconMedicine} />
              <Text style={[styles.textBold, styles.textDark]}>{placeholder6}</Text>
              <View style={styles.boxAmount}>
                <Text style={[styles.textNormal, styles.textDark]}>{liveActive === 0 ? '-' : liveActive}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Image resizeMode={'center'} source={Images.iconHeal} />
              <Text style={[styles.textBold, styles.textDark]}>{placeholder7}</Text>
              <View style={styles.boxAmount}>
                <Text style={[styles.textNormal, styles.textDark]}>{this.props.liveCountry?.recovered ?? '-'}</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Image resizeMode={'center'} source={Images.iconSkull} />
              <Text style={[styles.textBold, styles.textDark]}>{placeholder8}</Text>
              <View style={styles.boxAmount}>
                <Text style={[styles.textNormal, styles.textDark]}>{this.props.liveCountry?.deaths ?? '-'}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.wrapper, styles.section]}>
          <View style={styles.row}>
            {/* TODO: Animation pulse */}
            <View style={[styles.iconLive]}>
              <View style={styles.iconLiveBigger} />
              <View style={styles.iconLiveSmaller} />
            </View>
            <Text style={[styles.textBold, styles.textRed]}>{placeholder11}</Text>
          </View>
          <Text style={[styles.textHeader, styles.textDark]}>{placeholder9}</Text>
          <View style={styles.boxGrid}>
            <View style={styles.boxRow}>
              <View style={[styles.box, styles.boxWide]}>
                <View style={styles.row}>
                  <Image style={styles.marginRight} resizeMode={'center'} source={Images.iconVirusLight} />
                  <Text style={[styles.textBold, styles.textRed]}>{placeholder10}</Text>
                </View>
                <View style={styles.boxAmount}>
                  <Text style={[styles.textNormal, styles.textDark]}>{this.props.total?.confirmed ?? '-'}</Text>
                </View>
              </View>
              <View style={[styles.box, styles.boxWide]}>
                <View style={styles.row}>
                  <Image style={styles.marginRight} resizeMode={'center'} source={Images.iconMedicine} />
                  <Text style={[styles.textBold, styles.textRed]}>{placeholder6}</Text>
                </View>
                <View style={styles.boxAmount}>
                  <Text style={[styles.textNormal, styles.textDark]}>{totalActive === 0 ? '-' : totalActive}</Text>
                </View>
              </View>
            </View>
            <View style={styles.boxRow}>
              <View style={[styles.box, styles.boxWide]}>
                <View style={styles.row}>
                  <Image style={styles.marginRight} resizeMode={'center'} source={Images.iconHeal} />
                  <Text style={[styles.textBold, styles.textRed]}>{placeholder7}</Text>
                </View>
                <View style={styles.boxAmount}>
                  <Text style={[styles.textNormal, styles.textDark]}>{this.props.total?.recovered ?? '-'}</Text>
                </View>
              </View>
              <View style={[styles.box, styles.boxWide]}>
                <View style={styles.row}>
                  <Image style={styles.marginRight} resizeMode={'center'} source={Images.iconSkull} />
                  <Text style={[styles.textBold, styles.textRed]}>{placeholder8}</Text>
                </View>
                <View style={styles.boxAmount}>
                  <Text style={[styles.textNormal, styles.textDark]}>{this.props.total?.deaths ?? '-'}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* CONFIRMED BY COUNTRY */}
        <View style={[styles.wrapper, styles.section, styles.lastSection]}>
          <View style={styles.row}>
            {/* TODO: Animation pulse */}
            <View style={[styles.iconLive]}>
              <View style={styles.iconLiveBigger} />
              <View style={styles.iconLiveSmaller} />
            </View>
            <Text style={[styles.textBold, styles.textRed]}>{placeholder11}</Text>
          </View>
          <Text style={[styles.textHeader, styles.textDark]}>{placeholder12}</Text>
          <View style={styles.sectionWrapper}>
            {this.props.summary ? (
              <View style={[styles.listRow, styles.listRowRed]}>
                <Text style={[styles.textBold, styles.textLight, styles.textWrap]}>
                  {this.props.summary[0].country}
                </Text>
                <Text style={[styles.textBold, styles.textLight]}>{placeholder14}</Text>
                <Text style={[styles.textBold, styles.textLight]}>{this.props.summary[0].confirmed}</Text>
              </View>
            ) : null}
            {this.props.summary.slice(1, 4).map((summary, index) => (
              <View key={index} style={styles.listRow}>
                <Text style={[styles.textBold, styles.textDark, styles.textWrap]}>{summary.country}</Text>
                <Text style={[styles.textBold, styles.textRed]}>{summary.confirmed}</Text>
              </View>
            ))}
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

  private onChangeLocationPress = () => {
    this.props.moveToChangeLocationScreen();
  };

  private onPressCitiesButton = () => {
    NavigationService.navigate(NavigationService.RouteNames.CountriesScreen);
  };
}

const styles = StyleSheet.create({
  locationWidget: {
    backgroundColor: '#614ad3',
    borderBottomLeftRadius: 48,
    paddingTop: 48,
    marginBottom: 58,
  },
  textWrap: {
    maxWidth: '35%',
    overflow: 'hidden',
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

    ...Shadow('rgba(45, 36, 138, 0.1)'),
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
    alignItems: 'center',
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
