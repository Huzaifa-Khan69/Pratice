import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userloggedIn} = useSelector(state => state.Data.auth);
  console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0--->>   ", userloggedIn)

  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='AuthRoute' screenOptions={{headerShown: false}}>
      {userloggedIn ? (
        <Stack.Screen name="MainRoute" component={MainNavigation} />
      ) : ( 
        <Stack.Screen name="AuthRoute" component={AuthNavigation} />
      )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})