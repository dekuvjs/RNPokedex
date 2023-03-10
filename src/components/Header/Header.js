import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import styles from './styles';

const Header = ({text, goBack}) => {
  return (
    <View style={styles.headerContainer}>
      {!!goBack && (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-left-circle" size={25} color={colors.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default Header;
