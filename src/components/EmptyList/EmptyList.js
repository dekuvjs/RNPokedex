import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const EmptyList = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="warning" style={styles.icon} />
        <Text style={styles.text}>No {text} to display</Text>
      </View>
    </View>
  );
};

export default EmptyList;
