/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginNavigator from './src/navigators/LoginNavigator';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginNavigator />
    </SafeAreaView>
  );
};

export default App;
