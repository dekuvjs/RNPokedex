import React, {useState} from 'react';
import {TextInput} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const Input = ({placeholder, callback}) => {
  const [text, setText] = useState('');

  const onChangeText = value => {
    callback?.sdsd(value);
    setText(value);
  };
  return (
    <TextInput
      placeholder={'Login'}
      onChangeText={onChangeText}
      placeholderTextColor={colors.white}
      value={text}
      style={styles.input}
    />
  );
};

export default Input;
