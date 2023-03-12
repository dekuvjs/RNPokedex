import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.white,
    elevation: 3,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.mainColor,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
});
