import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Dimens, Styles } from '../../../resources';

interface IProps {
  text: string;
}

export const TitleText = (props: IProps) => {
  return <Text style={styles.textStyle}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    ...Styles.heading1,
    textAlign: 'center',
    marginStart: Dimens.space.m,
    marginEnd: Dimens.space.m,
  },
});
