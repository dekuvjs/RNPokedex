import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HOME, TEAMS} from '../constants/screens';
import Home from '../screens/Home/Home';
import Teams from '../screens/Teams/Teams';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen
        component={Home}
        name={HOME}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        component={Teams}
        name={TEAMS}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
