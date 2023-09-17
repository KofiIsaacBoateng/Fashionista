import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const styles = StyleSheet.create({
     container: {
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 15
     },
     label: {
          fontSize: 18
     }
})

const Button = ({index,  onPress}) => {
     const label = index === 3 ? "Let's get started": "Next"
     const backgroundColor = index !== 3 ? {
          backgroundColor: '#aaa3'
     } : {backgroundColor: '#2cb9b0'}
     const color = index !== 3 ? {
          color: '#000'
     } : {
          color: '#fff',
          fontWeight: '600'
     }
  return (
    <TouchableOpacity {...{onPress}}>
          <View style={[styles.container, backgroundColor]}>
               <Text style={[styles.label, color]}>{label}</Text>
          </View>
    </TouchableOpacity>
  )
}

export default Button