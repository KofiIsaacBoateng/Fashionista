import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    underlayImage: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%"
    },
    topOverlay:{
      flex: 1,width, 
      backgroundColor: "#fff", 
      borderBottomRightRadius: 70
    },
    middleImage: {
      width,
      height: "100%",
      borderTopLeftRadius: 70,
      borderBottomRightRadius: 70
    },
    bottom: {

    }
})

const HomeBackground = () => {
  return (
    <View style={{flex: 1}}>
      <View style={[{flex: 0.6}]}>
        <Image 
          source={require("../../../assets/auth/pattern-03.jpg")}
          style={[styles.underlayImage]}
        />
        <View style={styles.topOverlay} />
      </View>
      <View style={[{flex: 0.4, backgroundColor: "#fff"}]}>
        <View style={[{...StyleSheet.absoluteFillObject}, {backgroundColor: "#0c0d34", left: 0, right: 0, bottom: -3, top: "50%"}]} />
        <Image 
          source={require("../../../assets/auth/pattern-03.jpg")}
          style={[styles.middleImage]}
        />
      </View>
      <View style={[{flex: 0.35}]}>
        <Image 
          source={require("../../../assets/auth/pattern-03.jpg")}
          style={[styles.underlayImage]}
        />
        <View style={[{flex: 1, backgroundColor: "#0c0d34", borderTopLeftRadius: 70}]} />
      </View>
    </View>
  )
}

export default HomeBackground