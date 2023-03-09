import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  input: {
    height: 40,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    borderColor: colors.mainColor,
    backgroundColor: colors.mainColor,
    elevation: 3,
    color: colors.white,
    fontFamily: 'Roboto-Refular',
  },
});
