import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const AddMoreTeamsButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="plus" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default AddMoreTeamsButton;
