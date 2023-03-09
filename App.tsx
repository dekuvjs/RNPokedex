/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  return (
    <SafeAreaView>
      <MainNavigator />
    </SafeAreaView>
  );
};

export default App;
