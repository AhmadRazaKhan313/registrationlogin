import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/atoms/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubHeader from '../components/atoms/SubHeader'
import Input from '../components/atoms/Input'
import {email, lock, user} from '../contants/Icons'
import Button from '../components/atoms/Button'
import AccountPrompt from '../components/atoms/AccountPrompt'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage';


const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters')
    .required('First name is required'),
  
  lastName: Yup.string()
    .min(3, 'Last name must be at least 2 characters')
    .max(50, 'Last name cannot exceed 50 characters')
    .required('Last name is required'),
  
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
  
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Confirm password is required'),
})

const SignUp = ({navigation}) => {
  const handleSignup = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log('Form Values:', values)
      await AsyncStorage.setItem('user', JSON.stringify(values));
      navigation.navigate("SignIn" ,{signupData: values})   
      resetForm()   
    } catch (error) {
      console.error('Signup Error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.signupContainer}>
          <Header
          title={"Let’s Get Started!"}
          />
          <SubHeader text="Create an account on MNZL to get all features"/>  
          
          <Formik
            initialValues={{ 
              firstName: '', 
              lastName: '', 
              email: '', 
              password: '', 
              confirmPassword: '' 
            }}
            validationSchema={signupValidationSchema}
            onSubmit={handleSignup}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ 
              handleChange, 
              handleBlur, 
              handleSubmit, 
              values, 
              errors, 
              touched,
              isSubmitting,
              isValid
            }) => (
              <>
               
                <Input
                  icon={user}
                  placeholder='Enter your First Name'
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  touched={touched.firstName}
                  error={errors.firstName}
                />
              
                <Input
                  icon={user}
                  placeholder='Enter Your Last Name'
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  touched={touched.lastName}
                  error={errors.lastName}
                />
              
                <Input
                  icon={email}
                  placeholder='Enter Your Email'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  touched={touched.email}
                  error={errors.email}
                />
                <Input
                  icon={lock}
                  placeholder='Enter Your Password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  touched={touched.password}
                  error={errors.password}
                />
                <Input
                  icon={lock}
                  placeholder='Enter Your Confirm Password'
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  secureTextEntry
                  touched={touched.confirmPassword}
                  error={errors.confirmPassword}
                />
                <Button
                  title={isSubmitting ? "Signing up..." : "Signup"}
                  onPress={handleSubmit}
                  disabled={isSubmitting || !isValid}
                />
              </>
            )}
          </Formik>
          <AccountPrompt
           onPress={()=>navigation.navigate("SignIn")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
  },
  scrollContent: {
    flexGrow: 1,
  },
  signupContainer: {
    paddingTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
})