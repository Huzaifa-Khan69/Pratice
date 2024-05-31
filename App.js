import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/routes/Navigation'
// import { Provider } from 'react-redux'
// import { persistor, store } from './src/redux/Store'
// import { PersistGate } from 'redux-persist/integration/react'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    // <Navigation/>
    // </PersistGate>
    // </Provider>
    <Login/>
    // <SignUp/>
  )
}

export default App

const styles = StyleSheet.create({})