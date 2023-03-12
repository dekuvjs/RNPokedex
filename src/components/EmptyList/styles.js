import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 120,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainColor,
  },
  icon: {
    color: colors.white,
    fontSize: 50,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.white,
  },
});
