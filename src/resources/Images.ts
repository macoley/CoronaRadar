import { ImageSourcePropType } from 'react-native';

const path = '../../assets/images/';

export const Images: { [index: string]: ImageSourcePropType } = {
  tabBarIcon: require(path + 'tabbar_icon.png'),
  logo: require(path + 'image_rectangle_icon.png'),
  iconChevronLeft: require(path + 'icon_chevron_left.png'),
  iconChevronRight: require(path + 'icon_chevron_right.png'),
  doctor: require(path + 'doctor.png'),
  iconVirus: require(path + 'virus_icon.png'),
  iconVirusLight: require(path + 'virus_icon_2.png'),
  iconHeal: require(path + 'heal_icon.png'),
  iconMedicine: require(path + 'medicine_icon.png'),
  iconSkull: require(path + 'skull_icon.png'),
};
