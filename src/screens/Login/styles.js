import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
  },

  text: {
    color: colors.white,
    fontFamily: 'Roboto-BoldItalic',
    alignSelf: 'center',
    marginBottom: 50,
    fontSize: 20,
  },

  content: {
    height: 180,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 6,
  },
});
