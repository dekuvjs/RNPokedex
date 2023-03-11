import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  input: {
    height: 40,
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.white,
    elevation: 3,
    color: '#000000',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    marginBottom: 20,
  },
  text: {
    marginTop: 30,
    color: colors.white,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
});
