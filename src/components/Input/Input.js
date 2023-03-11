import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const Input = ({placeholder, callback}) => {
  const [text, setText] = useState('');

  const onChangeText = value => {
    callback?.sdsd(value);
    setText(value);
  };
  return (
    <>
      <Text style={styles.text}>{placeholder}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
      />
    </>
  );
};

export default Input;
