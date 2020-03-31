import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import FullScreenWrapper from '../organisms/FullScreenWrapper';
import { Images } from '../../../resources';
import NavigationService from '../../../services/NavigationService';
import Shadow from '../../../utilities/Shadow';

const placeholder1 = 'Track the spread\nof the Coronavirus';
const placeholder13 =
  'Explore where you are at risk the most. Stay informed with the latest data about your country and the other parts of the world.';
const placeholder14 = 'Get started';

export default class WelcomeScreen extends PureComponent {
  public render() {
    return (
      <FullScreenWrapper>
        <View style={[styles.wrapper]}>
          <Image style={styles.image} resizeMode={'contain'} source={Images.welcome} />
          <View>
            <Text style={[styles.textHeader, styles.textDark]}>{placeholder1}</Text>
            <View style={styles.sectionWrapper}>
              <Text style={[styles.textRegular, styles.textGray]}>{placeholder13} </Text>
            </View>
            <TouchableOpacity onPress={this.onButtonPress}>
              <View style={styles.button}>
                <Text style={[styles.textButton, styles.textLight]}>{placeholder14} </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </FullScreenWrapper>
    );
  }

  private onButtonPress = () => {
    NavigationService.navigate(NavigationService.RouteNames.ChangeLocationScreen);
  };
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff0660',
    paddingHorizontal: 32,
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,

    ...Shadow('#ff0660'),
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    marginBottom: 32,
    marginHorizontal: -32,
  },
  wrapper: {
    paddingHorizontal: 32,
    paddingVertical: 32,
    flex: 1,
    justifyContent: 'space-between',
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
  textGray: {
    color: 'rgba(18, 27, 116, 0.4);',
  },
  textHeader: {
    // font-family: SFProText;
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 48,
  },
  textButton: {
    // font-family: SFProText;
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
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
  textRegular: {
    // font-family: SFProText;
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 21,
  },
  textSubheader: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
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
  sectionWrapper: {
    marginVertical: 16,
  },
});
