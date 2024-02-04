import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    container: {
        opacity: 0.6

    },
    blob: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginBottom: 5
    },
    title: {
        fontWeight: "700",
        fontSize: 12,
        textAlign: "center",
        letterSpacing: 0.5
    }
})

const StatUpdate = ({backgroundColor, title}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => null}
    >
      <View style={[styles.blob, {backgroundColor}]} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default StatUpdate