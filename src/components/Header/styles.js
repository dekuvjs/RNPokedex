import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  headerContainer: {
    paddingLeft: 20,
    marginTop: 20,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.mainColor,
  },
  backButton: {
    marginRight: 20,
  },
  headerText: {
    color: colors.white,
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 20,
  },
});
