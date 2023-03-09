import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.mainColor,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
});
