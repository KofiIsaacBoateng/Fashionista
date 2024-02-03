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
    }
})

const Header = ({LeftIcon, title, RightIcon}) => {
  return (
    <View style={styles.header}>
        {LeftIcon}
        <Text style={{color: "#fff", letterSpacing: 1, opacity: 0.7}}>{title}</Text>
        {RightIcon}
    </View>
  )
}

export default Header

