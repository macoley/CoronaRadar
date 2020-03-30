import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import FullScreenWrapper from '../../welcome/organisms/FullScreenWrapper';
import { Images } from '../../../resources';
import NavigationService from '../../../services/NavigationService';

const placeholder1 = 'Select country\nto monitor';
const placeholder14 = 'Continue';

export default class LocationScreen extends PureComponent {
  public render() {
    return (
      <FullScreenWrapper>
        <View style={[styles.wrapper]}>
          <Image style={styles.image} resizeMode={'contain'} source={Images.window} />
          <View>
            <Text style={[styles.textHeader, styles.textDark]}>{placeholder1}</Text>
            <View style={[styles.sectionWrapper, styles.pickerWrapper]}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                textInputProps={{ style: styles.picker }}
                onValueChange={value => console.log(value)}
                style={{
                  iconContainer: styles.iconContainer,
                }}
                placeholder={{ label: 'Choose your country', value: null, color: 'rgba(18, 27, 116, 0.2)' }}
                Icon={this.DropdownIcon}
                items={[
                  { label: 'Football', value: 'football' },
                  { label: 'Baseball', value: 'baseball' },
                  { label: 'Hockey', value: 'hockey' },
                ]}
              />
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

  private DropdownIcon = () => <Image style={styles.dropdownIcon} source={Images.iconDropdown} />;

  private onButtonPress = () => {
    NavigationService.navigate(NavigationService.RouteNames.BottomTabNavigator);
  };
}

const styles = StyleSheet.create({
  dropdownIcon: {},
  pickerWrapper: {
    marginTop: 48,
  },
  iconContainer: {
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    right: 16,
  },
  picker: {
    // backgroundColor: 'white',
    borderColor: 'rgba(18, 27, 116, 0.2)',
    borderWidth: 1,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    color: '#121b74',
    // marginTop: 24,
  },
  button: {
    backgroundColor: '#ff0660',
    paddingHorizontal: 32,
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
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
