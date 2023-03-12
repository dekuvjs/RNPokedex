import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 12,
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
