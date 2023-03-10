import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const RegionButton = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => onPress(item)}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default RegionButton;
