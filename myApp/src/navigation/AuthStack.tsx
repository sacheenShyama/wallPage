import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import {AuthStackParamList} from '../types/navigation';
import MainTabs from './MainTabs';
const Stack = createStackNavigator<AuthStackParamList>();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
