import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingBottom: 20,
      paddingTop: 13
    },
    title: {
      textTransform: "uppercase", 
      fontWeight: "900", 
      letterSpacing: 1, 
      opacity: 0.7
    },
    badge: {
      width: 8, 
      height: 8, 
      backgroundColor: "orangered", 
      borderRadius: 50,
      position: "absolute",
      right: -8,
      top: -8,
      alignItems: "center",
      justifyContent: "center"
    }
})

const Header = ({LeftIcon, title, titleColor: color , RightIcon, badgeForRight}) => {
  return (
    <View style={[styles.container]}>
        {LeftIcon}
        <Text style={[styles.title, {color}]}>{title}</Text>
        <View style={{}}>
          {RightIcon}
          {badgeForRight && <View style={styles.badge} />}
        </View>
    </View>
  )
}

export default Header

