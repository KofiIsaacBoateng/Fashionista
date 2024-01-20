import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    marginTop: 30,
    alignSelf: "center",
    position: "relative", 
    justifyContent: "center"
  },

  textInput: {
    borderWidth: 1,
    borderColor: "firebrick",
    height: 60,
    paddingLeft: 15,
  },

  label: {
    position: "absolute",
    flexDirection: 'row',
    gap: 10,
    marginLeft: 10,
    opacity: 0.5
  },

  validationIndicators: {
    position: "absolute",
    right: 15,
    backgroundColor: 'firebrick',
    borderRadius: 50,
    padding: 5
  },

  checkboxContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  checkbox: {
    borderColor: "gray",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  }
})

const CustomTextInput = ({name, label, iconName}) => {
  const Icon = 
      name === "email" ?
        <FontAwesome name={iconName} size={20} color="firebrick" /> : 
      // iconName === "lock" ?
        <Ionicons name={iconName} size={20} color="firebrick" />

  return (
    <View style={styles.container}>
      <View style={[styles.label, {color: "firebrick"}]}>
        {Icon}
        <Text style={{color: "firebrick"}}>Enter {label}</Text>
      </View>

      <TextInput
          id={name}
          name={name}
          onChange={() => null}
          onChangeText={() => null}
          style={styles.textInput}
      />

      {/* <View style={styles.validationIndicators}>
        <AntDesign name="close" size={16} color="white" />
      </View> */}
      <View style={styles.validationIndicators}>
        <Ionicons name="checkmark" size={16} color="white" />
      </View>
    </View>
  )
}


const CheckBox = ({name, label}) => {
    const [checked, setChecked] = useState(false)

    const updateChecked = () => {
      setChecked(prev => !prev)
    }
    return (
        <TouchableOpacity 
          style={styles.checkboxContainer}
          onPress={updateChecked}
        >
            <View style={[styles.checkbox, {backgroundColor: checked? "green": "white", borderWidth: checked? 0: 1}]}>
              {checked && <Ionicons name="checkmark" size={18} color="#fff" />}
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

export {CustomTextInput, CheckBox}