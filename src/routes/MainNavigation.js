import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyProduct from '../screens/MyProduct';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyProduct" component={MyProduct} />
    {/* <Stack.Screen name="Signup" component={Signup} /> */}
  </Stack.Navigator>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})