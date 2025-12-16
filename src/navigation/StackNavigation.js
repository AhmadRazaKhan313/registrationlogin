import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
      <Stack.Navigator 
        initialRouteName="SignIn"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6366f1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="SignIn" 
          component={SignIn}
          options={{ 
            title: 'Sign In',
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp}
          options={{ 
            title: 'Sign Up',
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ 
            title: 'Home',
            headerShown: false,
            gestureEnabled: false // Disable back gesture on Home screen
          }}
        />
      </Stack.Navigator>
  );
}