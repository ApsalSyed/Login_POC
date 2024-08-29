import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
// import SigninPage from '../pages/SigninPage';

const Stack = createStackNavigator();

export default function PostNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
