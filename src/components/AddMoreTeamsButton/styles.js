import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainColor,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  icon: {
    color: colors.white,
    fontSize: 30,
  },
});
