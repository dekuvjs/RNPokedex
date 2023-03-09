import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home/Home';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen component={Home} name="Home" />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
