import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContainer from '../components/AuthContainer'


const Login = () => {
  return (
    <AuthContainer>
        <Text style={{fontSize: 23, color: '#000', textAlign: 'center'}}>Login Page</Text>
    </AuthContainer>
  )
}

export default Login

const styles = StyleSheet.create({})