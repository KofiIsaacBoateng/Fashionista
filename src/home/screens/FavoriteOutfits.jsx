import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FavoriteOutfits = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#0c0d34", alignItems: "center", justifyContent: "center"}}>
      <Text style={{fontSize: 45, color: "#fff", fontWeight: "bold"}}>Favorite Outfits</Text>
    </SafeAreaView>
  )
}

export default FavoriteOutfits

const styles = StyleSheet.create({})