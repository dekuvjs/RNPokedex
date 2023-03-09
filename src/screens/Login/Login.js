import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {ImageBackground, Text} from 'react-native';

import {View} from 'react-native';
import {onGoogleButtonPress} from '../../apis/FirebaseAuth';
import Button from '../../components/Button/Button';
import styles from './styles';

const Login = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '181436431271-u8coe5smdubgp32n42kj5v0u7iurs8ej.apps.googleusercontent.com',
    });
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require('../../../assets/images/LoginBackground.jpg')}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to RN Pokedex</Text>
        <Button text="Sign-in with google" onPress={onGoogleButtonPress} />
      </View>
    </ImageBackground>
  );
};

export default Login;
