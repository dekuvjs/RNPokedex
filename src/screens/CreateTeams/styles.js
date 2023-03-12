import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
  },
  listContainer: {
    justifyContent: 'space-between',
    padding: 12,
  },

  text: {
    color: colors.white,
    fontFamily: 'Roboto-BoldItalic',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
  },

  form: {
    backgroundColor: colors.mainColor,
    padding: 12,
  },
});
