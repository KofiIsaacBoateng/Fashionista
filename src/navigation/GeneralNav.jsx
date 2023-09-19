import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/Onboarding'
import Register from '../screens/Register'
import Login from '../screens/Login'
import Welcome from '../screens/Welcome'

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
          </NativeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
