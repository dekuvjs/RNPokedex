import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 150,
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
