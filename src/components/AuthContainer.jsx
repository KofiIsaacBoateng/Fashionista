import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const AuthContainer = ({children}) => {
  return (
      <SafeAreaView style={{flex: 1}}>
        <LinearGradient
          colors={['#4c669f', 'red', 'blue']}
          style={{flex: 1}}
        >
          <View style={styles.container}>
              {children}
          </View>
        </LinearGradient>
      </SafeAreaView>
    
  )
}

export default AuthContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})