import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
    <View style={styles.container}>
      <View style={[styles.blob, {backgroundColor}]} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default StatUpdate