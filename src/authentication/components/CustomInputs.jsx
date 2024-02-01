import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"

import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
const {width, height} = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    marginTop: 23,
    alignSelf: "center",
    position: "relative", 
    justifyContent: "center"
  },

  textInput: {
    borderWidth: 1,
    height: 60,
    paddingLeft: 15,
    color: "#333", 
    fontWeight: "400", 
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
  },

  validation: (touched, error) => ({
    borderColor: touched && error ? "red": touched && !error ? "green": "black",
    color: touched && error ? "red": touched && !error ? "green": "black"
  })
})

const CustomTextInput = ({reference, name, label, iconName, formik: {values, handleChange, errors, handleBlur, touched}, returnKeyLabel, returnKeyType, onSubmitEditing}) => {
  const [animatePlaceholder, setAnimatePlaceholder] = useState(false)
  const transform = useAnimatedStyle(() => ({
    transform: [
      {translateY: animatePlaceholder? -30: 0},
      {translateX: animatePlaceholder? -5: 0},
      {scale: animatePlaceholder? 0.9: 1}
    ],
    backgroundColor: animatePlaceholder ? "white": "transparent",
    zIndex: 1,
    // borderRightWidth: animatePlaceholder? 1.5: 0,
    // borderLeftWidth: animatePlaceholder? 1.5: 0,
    // paddingHorizontal: 5
  }))

  const Icon = 
      name === "email" ?
        <FontAwesome name={iconName} size={20} color={touched[name] && errors[name] ? "red": touched[name] && !errors[name] ? "green": "black"} /> : 
      // iconName === "lock" ?
        <Ionicons name={iconName} size={20} color={touched[name] && errors[name] ? "red": touched[name] && !errors[name] ? "green": "black"}/>

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.label, {color: "firebrick", zIndex: 999}, transform, styles.validation(touched[name], errors[name])]}>
        {Icon}
        <Animated.Text style={styles.validation(touched[name], errors[name])}>{!animatePlaceholder && "Enter"} {label}</Animated.Text>
      </Animated.View>

      <TextInput
          ref={reference}
          id={name}
          type={name}
          name={name}
          value={values[name]}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          onFocus={() => setAnimatePlaceholder(true)}
          style={[styles.textInput, styles.validation(touched[name], errors[name]), {zIndex: animatePlaceholder? -5: 5, borderTopWidth: animatePlaceholder? 0: 1}]}
          autoComplete={name}
          autoCapitalize="none"
          {...{returnKeyLabel}}
          {...{returnKeyType}}
          {...{onSubmitEditing}}
      />
    {touched[name] && errors[name] && 
      <View style={[styles.validationIndicators, {backgroundColor: "red"}]}>
        <AntDesign name="close" size={16} color="white" />
      </View>
    }
      {touched[name] && !errors[name] &&
        <View style={[styles.validationIndicators, {backgroundColor: "green"}]}>
          <Ionicons name="checkmark" size={16} color="white" />
        </View>
      }
    </View>
  )
}


const CheckBox = ({name, label, formik: {setFieldValue, values}}) => {
    const [checked, setChecked] = useState(false)

    const updateChecked = () => {
      setChecked(prev => !prev)
      setFieldValue(name, checked)
    }
    return (
        <TouchableOpacity 
          style={styles.checkboxContainer}
          onPress={updateChecked}
        >
            <View style={[styles.checkbox, {backgroundColor: values.persist? "green": "white", borderWidth: values.persist? 0: 1}]}>
              {values.persist && <Ionicons name="checkmark" size={18} color="#fff" />}
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

export {CustomTextInput, CheckBox}