import { StyleSheet, Text } from 'react-native'
import React from 'react'
import AuthContainer from '../components/AuthContainer'

const styles = StyleSheet.create({})

const Login = () => {
  return (
    <AuthContainer>
        <Text style={{fontSize: 23, fontWeight: 900, textAlign: 'center'}}>Login Page</Text>
    </AuthContainer>
  )
}

export default Login