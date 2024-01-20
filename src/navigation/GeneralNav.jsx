import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../authentication/screens/Onboarding'
import Register from '../authentication/screens/Register'
import Login from '../authentication/screens/Login'
import Welcome from '../authentication/screens/Welcome'
import ForgotPassword from '../authentication/screens/ForgotPassword'

export default function Main() {
     const NativeStack = createNativeStackNavigator()
     
     return (
          <NativeStack.Navigator
               initialRouteName='Onboarding'
               screenOptions={() => ({
                    header: () => null
               })}
          >
               <NativeStack.Screen
                    name='Onboarding' 
                    component={Onboarding}
               />

               <NativeStack.Screen 
                    name='Welcome'
                    component={Welcome}
               />

               <NativeStack.Screen 
                    name='Register' 
                    component={Register} 
               />
               <NativeStack.Screen 
                    name='Login' 
                    component={Login} 
               />
               <NativeStack.Screen 
                    name='ForgotPassword'
                    component={ForgotPassword}
               />
          </NativeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
