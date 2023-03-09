/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';

import MainNavigator from './src/navigators/MainNavigator';
import Login from './src/screens/Login/Login';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, [initializing]);

  if (initializing) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {!user ? <Login /> : <MainNavigator />}
    </SafeAreaView>
  );
};

export default App;
