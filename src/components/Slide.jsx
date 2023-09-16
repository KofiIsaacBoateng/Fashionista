import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Slide = ({label, right}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
     
})