import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  Container: {
    height: 50,
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    color: colors.mainColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 40,
    marginRight: 5,
  },
});
