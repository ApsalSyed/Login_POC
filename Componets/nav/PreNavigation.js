import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginPage from '../pages/LoginPage/LoginPage';
import SigninPage from '../pages/SigninPage/SigninPage';

const Stack = createStackNavigator();

export default function PreNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='Sign' component={SigninPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
