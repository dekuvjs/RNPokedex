import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button} from 'react-native';

import {View} from 'react-native';
import Input from '../../components/Input/Input';
import styles from './styles';

import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const Login = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '181436431271-bbp53ii4oh8mi49p52bcjg4supdii6jp.apps.googleusercontent.com',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </View>
  );
};

export default Login;
