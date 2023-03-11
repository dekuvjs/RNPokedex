import React from 'react';
import {Text, TextInput} from 'react-native';
import styles from './styles';

const Input = ({placeholder, value, onChangeText}) => {
  return (
    <>
      <Text style={styles.text}>{placeholder}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </>
  );
};

export default Input;
