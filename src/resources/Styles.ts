import { StyleSheet } from 'react-native';
import { Dimens } from './Dimens';

export const Styles = StyleSheet.create({
  heading1: {
    fontFamily: 'Lato-Semibold',
    fontSize: Dimens.fontSize.xl,
  },
  heading2: {
    fontFamily: 'Lato-Semibold',
    fontSize: Dimens.fontSize.l,
  },
  heading3: {
    fontFamily: 'Lato-Semibold',
    fontSize: Dimens.space.m,
  },
  heading4: {
    fontFamily: 'Lato-Semibold',
    fontSize: Dimens.fontSize.s,
  },
  medium: {
    fontFamily: 'Lato-Medium',
    fontSize: Dimens.space.m,
  },
  body: {
    fontFamily: 'Lato-Regular',
    fontSize: Dimens.fontSize.s,
  },
  caption: {
    fontFamily: 'Lato-Regular',
    fontSize: Dimens.fontSize.xs,
  },
});
