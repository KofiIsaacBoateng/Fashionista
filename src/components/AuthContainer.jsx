import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AuthContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <StatusBar style='dark' />
        {children}
    </View>
  )
}

export default AuthContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
})