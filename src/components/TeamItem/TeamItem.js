import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';

import styles from './styles';

const TeamItem = ({name, amount, onEdit, onDelete}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>{'name'}</Text>
      <Text style={styles.text}>{'amoun'}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="pencil-square-o" size={20} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit} style={styles.button}>
          <Icon name="trash-o" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamItem;
