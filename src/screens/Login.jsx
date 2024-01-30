import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContainer from '../components/AuthContainer'
import { SafeAreaFrameContext } from 'react-native-safe-area-context';


const Login = () => {
  return (
    <AuthContainer>
        <Text style={{fontSize: 55, color: '#fff'}}>Welcome to the Login Page!</Text>
    </AuthContainer>
  )
}

export default Login

const styles = StyleSheet.create({})