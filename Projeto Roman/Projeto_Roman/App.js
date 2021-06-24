import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './scr/Screen/Login';
import Main from './scr/Screen/Main';


const AuthStack = createStackNavigator();
export default function Stack(){
  return(
    <NavigationContainer>
      <AuthStack.Navigator
        headerMode = 'none'
      >
        <AuthStack.Screen name = 'Login' component={Login} />
        <AuthStack.Screen name = 'Main' component={Main} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}