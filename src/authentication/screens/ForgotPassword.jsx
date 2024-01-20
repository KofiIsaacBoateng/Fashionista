import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContainer from '../components/AuthContainer'


const styles = StyleSheet.create({
    
})

const ForgotPassword = () => {
  return (
    <AuthContainer>
      <Text style={{fontSize: 23, fontWeight: 900, textAlign: 'center'}}>ForgotPassword</Text>
    </AuthContainer>
  )
}

export default ForgotPassword