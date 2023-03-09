import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login/Login';
import {LoginNavigatorStackProps} from '../types/NavigationTypes';

const MainStack = createNativeStackNavigator<LoginNavigatorStackProps>();

const LoginNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen component={Login} name="Login" />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default LoginNavigator;
