import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
    header: {
        height: height * 0.15,
        backgroundColor: "#0c0d34",
        borderBottomRightRadius: 75,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingHorizontal: 15
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

const Header = ({LeftIcon, title, RightIcon, badgeForRight}) => {
  return (
    <View style={styles.header}>
        {LeftIcon}
        <Text style={{color: "#fff", letterSpacing: 1, opacity: 0.7}}>{title}</Text>
        <View style={{}}>
          {RightIcon}
          {badgeForRight && <View style={styles.badge} />}
        </View>
    </View>
  )
}

export default Header

