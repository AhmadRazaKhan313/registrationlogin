import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/atoms/Header'
import SubHeader from '../components/atoms/SubHeader'
import Input from '../components/atoms/Input'
import {email, lock, google, facebook, apple, } from '../Contants/Icons'
import Button from '../components/atoms/Button'
import AccountPrompt from '../components/atoms/AccountPrompt'
import {images} from '../Contants/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import * as Yup from 'yup'

 const signInValidationSchema = Yup.object().shape({
 email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required("Password is Required!")

 })


const SignIn = ({
  navigation,
  route
}) => {

const handleSignIn = async(values) => {
  try {
    console.log("Valuesssss", values)
    const SignUpData = await AsyncStorage.getItem('user')
    
    if(SignUpData) {
      const userData = JSON.parse(SignUpData)
      console.log("userData ", userData)
      
      if(values.email === userData.email && values.password === userData.password){
        Alert.alert("Success", "You are Successfully Logged In")
        navigation.navigate("Home")
      } else {
        Alert.alert("Error", "Invalid email or password")
      }
    } else {
      Alert.alert("Error", "No user found. Please sign up first.")
    }
  } catch(error) {
    console.log("Error:", error)
    Alert.alert("Error", "Something went wrong")
  }
}
  return (
  
    <SafeAreaView style={styles.container}>
      
       <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={images.logo} style={styles.logoContainer}/>
        <View style={styles.signinContainer}>
           <Header title={"Welcome back!"}/>
     <SubHeader text={"Log in to existing LOGO account"}/>
<Formik 
  initialValues={{ 
    email: "",
    password: ""
  }}
  validationSchema={signInValidationSchema}
  onSubmit={handleSignIn}
  validateOnChange={true}
  validateOnBlur={true}
>
  {({
    handleSubmit,
    handleChange, 
    handleBlur,
    values,
    isValid,
    errors,
    touched, 
    isSubmitting
  }) => ( 
    <>
      <Input 
        icon={email}  
        placeholder='Enter username or email' 
        value={values.email} 
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        touched={touched.email}
        error={errors.email}
      />
      <Input 
        icon={lock}  
        secureTextEntry={true}
        placeholder='Enter Your Password' 
        value={values.password} 
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        touched={touched.password}
        error={errors.password}
      />
      <Button 
        title={isSubmitting ? "Signing In" : "Sign In"} 
        onPress={handleSubmit}
        disabled={isSubmitting || !isValid}
      />
    </>
  )}
</Formik>
          <Text>or Sign up using</Text>
         <View style={styles.socialContainer}>
        <Image source={google} style={styles.icon} />
        <Image source={facebook} style={styles.icon} />
        <Image source={apple} style={styles.icon} />
          
         </View>

        </View>
    
         <AccountPrompt message='Don’t have an account?'
         actionText='Sign Up'
         onPress={()=>navigation.navigate("SignUp")}

         />

      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20
  },
  scrollContent: { 
    flexGrow: 1,
    justifyContent: "center"
  },
  signinContainer:{
      paddingTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,

  },
  socialContainer:{
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center", 
    gap: 20
  },
  logoContainer:{
    width: 209, 
    height: 61,
    alignSelf: "center"
  },
  icon: {
    width: 24,
    height: 24
  }
})