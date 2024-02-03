import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

    heading: {
        fontSize: 50,
        marginBottom: 30,
        fontWeight: "800",
        opacity: 0.7 
    },

    rounded: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },

    msg: {
        fontSize: 18,
        width: width * 0.8,
        textAlign: "center",
        fontWeight: "700",
        opacity: 0.6
    },

    callToAction: {
        marginTop: 50,
        paddingVertical: 18,
        width: width * 0.8,
        borderRadius: 100
    }

})

const SuccessState = ({displayMessage, activityMessage, setSending}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Text style={[styles.heading, {color: "green"}]}>{displayMessage}</Text>
        <View style={[styles.rounded, {backgroundColor: "green"}]}>
            <Ionicons name="checkmark" size={35} color="#fff" />
        </View>
        <Text style={styles.msg}>{activityMessage}</Text>
    </View>
  )
}

const FailedState = ({displayMessage, activityMessage, setSending, reset}) => {
    return (
      <View style={styles.container}>
        <Text style={[styles.heading, {color: "firebrick"}]}>{displayMessage}</Text>
        <View style={[styles.rounded, {backgroundColor: "red"}]}>
            <AntDesign name="close" size={40} color="#fff" />
        </View>
        <Text style={styles.msg}>{activityMessage}</Text>
      </View>
    )
  }

export {SuccessState, FailedState }
