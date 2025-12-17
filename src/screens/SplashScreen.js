import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react' 
import {images} from '../contants/images'

const SplashScreen = ({onFinish}) => {
      useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.SplashContainer}>
        <Image source={images.logo} style={styles.logo}/>
        <Image source= {images.splash} style={styles.splashImage}/>
        <Text style={styles.slpashheadeing}> Welcome to Sign Up </Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    SplashContainer:{
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    splashImage:{
        width: 369,
        height: 669
    },
    logo: {
        position: "absolute",
        zIndex: 1,
        top: '30%',
        left: '32%',
    transform: [
      { translateX: -50 },
      { translateY: -50 },
    ],

    },
    slpashheadeing:{
        fontSize: 22,
        fontWeight: "800",
        textAlign: "center", 
        paddingTop: 30,
    }
})