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
  saveButton: {
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: 6,
    right: 10,
    elevation: 10,
  },
  headerSaveText: {
    marginRight: 20,
    marginLeft: 20,
    color: colors.mainColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    elevation: 6,
  },
});
