import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  Container: {
    height: 50,
    backgroundColor: colors.mainColor,
    marginBottom: 20,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    color: colors.white,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginRight: 10,
  },
});
