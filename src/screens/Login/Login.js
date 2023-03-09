import React from 'react';
import {View} from 'react-native';
import Input from '../../components/Input/Input';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Input />
      <Input />
    </View>
  );
};

export default Login;
