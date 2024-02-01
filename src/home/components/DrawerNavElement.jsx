import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    rounded: {
        width: 38,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },

    el: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingRight: 15,
        marginTop: 10,
        marginRight: "auto",
        marginLeft: 30,
        marginBottom: 10
    }
})



const RoundedIcon = ({icon, color}) => {
    return (
        <View style={[styles.rounded, {backgroundColor: color}]}>
            {icon}
        </View>
    )
}


const DrawerNavElement = ({label, action, icon, color, count}) => {
  return (
    <TouchableOpacity
        style={styles.el}
        onPress={action}
    >
        <RoundedIcon color={color} icon={icon} />
        <Text style={{fontSize: 13, color: "#0009", fontWeight: "900"}}>{label} {count ? `(${count})`: "" }</Text>
    </TouchableOpacity>
  )
}

export default DrawerNavElement