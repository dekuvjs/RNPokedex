import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/Login/Login';

const MainStack = createNativeStackNavigator();

const LoginNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default LoginNavigator;
