import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/SignUp';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Signup"
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})