import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import styles from './styles';

const Header = ({text, goBack, onSave}) => {
  return (
    <View style={styles.headerContainer}>
      {!!goBack && (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-left-circle" size={25} color={colors.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{text}</Text>
      {!!onSave && (
        <TouchableOpacity onPress={onSave} style={styles.saveButton}>
          <Text style={styles.headerSaveText}>save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
