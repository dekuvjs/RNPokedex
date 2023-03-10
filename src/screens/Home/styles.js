import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
  },

  text: {
    color: colors.white,
    fontFamily: 'Roboto-BoldItalic',
    alignSelf: 'center',
    marginBottom: 50,
    fontSize: 20,
  },

  columnContent: {justifyContent: 'space-between'},
});
