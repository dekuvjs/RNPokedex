import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.mainColor,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 6,
  },
  image: {height: 200, width: 200},
  icon: {
    color: colors.white,
    fontSize: 50,
  },
  text: {
    marginTop: 10,
    paddingLeft: 10,
    height: 30,
    borderRadius: 6,
    backgroundColor: colors.white,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.mainColor,
  },
});
