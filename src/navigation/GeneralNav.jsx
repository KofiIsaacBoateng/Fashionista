import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigation from './Authentication'
import HomeNavigation from './Home'

export default function Main() {
     const NativeStack = createNativeStackNavigator()
     
     return (
          <NativeStack.Navigator
               initialRouteName='AuthNavigation'
               screenOptions={() => ({
                    header: () => null
               })}
          >
               <NativeStack.Screen
                    name='AuthNavigation' 
                    component={AuthNavigation}
               />

               <NativeStack.Screen 
                    name='Home'
                    component={HomeNavigation}
               />
          </NativeStack.Navigator>
    )
}