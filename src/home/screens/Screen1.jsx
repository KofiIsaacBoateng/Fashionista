import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const {width, height} = Dimensions.get("window")
const Screen1 = () => {
  return (
    <SafeAreaView style={{flex: 1, height, alignItems: "center", justifyContent: "center", backgroundColor: "#0c0d34"}}>
      <Text style={{fontSize: 50, textTransform: "uppercase", fontWeight: "900", color: "#fff"}}>Screen1</Text>
    </SafeAreaView>
  )
}

export default Screen1

const styles = StyleSheet.create({})