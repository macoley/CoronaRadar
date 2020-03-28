import { ImageSourcePropType } from 'react-native';

const path = '../../assets/images/';

export const Images: { [index: string]: ImageSourcePropType } = {
  tabBarIcon: require(path + 'tabbar_icon.png'),
  logo: require(path + 'image_rectangle_icon.png'),
  iconChevronLeft: require(path + 'icon_chevron_left.png'),
  iconChevronRight: require(path + 'icon_chevron_right.png'),
};
