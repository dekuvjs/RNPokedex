import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';

import styles from './styles';

const TeamItem = ({name, onEdit, onDelete, onPress}) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.buttonContainer}>
        {!!onEdit && (
          <TouchableOpacity onPress={onEdit} style={styles.button}>
            <Icon name="pencil-square-o" size={25} color={colors.mainColor} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onDelete} style={styles.button}>
          <Icon name="trash-o" size={25} color={colors.mainColor} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TeamItem;
