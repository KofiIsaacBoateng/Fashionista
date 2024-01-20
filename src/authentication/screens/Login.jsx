import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AuthContainer from '../components/AuthContainer'
import { CustomTextInput, CheckBox } from '../components/CustomInputs'

const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "900",
    marginTop: 10,
    marginBottom: 5,
    color: "#555",
    textAlign: "center"
  },

  intro: {
    textAlign: "center",
    color: "#555b",
  },

  bottom: {
    width: width * 0.8, 
    marginTop:  20, 
    flexDirection: "row",
    justifyContent: "space-between"
  },

  callToAction: {
    backgroundColor: "green",
    marginTop: 70,
    paddingVertical: 17,
    borderRadius: 70,
    width: width * 0.8,
  }
})

const Login = ({navigation}) => {
  return (
    <AuthContainer>
        <Text style={styles.heading}>Welcome Back!</Text>
        <Text style={styles.intro}>Use your credentials to login to your account.</Text>
        <CustomTextInput 
          name="email"
          id="email"
          iconName="envelope-o"
          label="email"
        />

        <CustomTextInput 
          name="password"
          id="password"
          iconName="lock-closed-outline"
          label="password"
        />

        <View style={styles.bottom}>
          <CheckBox 
            label="Remember me"
            name="persist"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={{textAlign: "right"}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.callToAction}>
          <Text style={{color: "#fff", fontWeight: 700, fontSize: 16, textAlign: "center"}}>Login to your account</Text>
        </TouchableOpacity>
    </AuthContainer>
  )
}

export default Login