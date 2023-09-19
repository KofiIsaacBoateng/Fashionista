import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width, height}  = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width,
    },

    textContainer: {
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
      fontSize: 75,
      color: '#fff',
      fontWeight: 'bold',
      letterSpacing: 3
    }
})

const Slide = ({label, right}) => {
  const transform ={
    transform: [
      {translateY: height / 2 - 150},
      {translateX: right ? width / 2  - 50 : -width / 2 + 50},
      {rotate: right ? '90deg' : '-90deg' }
    ]
  }  

  return (
    <View style={styles.container}>
        <View style={[styles.textContainer, transform]}>
          <Text style={styles.title}>{label}</Text>
        </View>
    </View>
  )
}

export default Slide

