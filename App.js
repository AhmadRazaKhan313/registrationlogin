import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Home from './src/screens/Home'
// import SignUp from './src/screens/Signup'
import SignIn from './src/screens/SignIn'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'
import SplashScreen from './src/screens/SplashScreen'

const App = () => {
    const [showSplash, setShowSplash] = useState(true);
  return (
    <NavigationContainer>
    <StatusBar 
    barStyle={"dark-content"}
    />
    {showSplash? <SplashScreen onFinish={()=> setShowSplash(false)}/>: <StackNavigation/> }

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})