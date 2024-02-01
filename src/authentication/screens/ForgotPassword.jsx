import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContainer from '../components/AuthContainer'
import { AuthRedirectButton } from '../components/Button'


const styles = StyleSheet.create({
    
})

const ForgotPassword = ({navigation}) => {
    const authRedirectionFooter = (
      <AuthRedirectButton 
        label="Don't have an account yet ?"
        actionLabel="Sign up here"
        onPress={() => navigation.navigate("Register")}
      />
    )

  return (
    <AuthContainer
      {...{authRedirectionFooter}}
    >
      <Text style={{fontSize: 23, fontWeight: 900, textAlign: 'center'}}>ForgotPassword</Text>
    </AuthContainer>
  )
}

export default ForgotPassword