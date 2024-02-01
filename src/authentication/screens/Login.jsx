import { View, Dimensions, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, {useRef} from 'react'
import AuthContainer from '../components/AuthContainer'
import { CustomTextInput, CheckBox } from '../components/CustomInputs'
import { AuthRedirectButton } from '../components/Button'
import { useFormik } from 'formik'
import { loginValidationSchema } from '../helpers/authSchemas'

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "900",
    marginTop: 10,
    marginBottom: 5,
    color: "#555",
    textAlign: "center"
  },

  intro: {
    textAlign: "center",
    color: "#555b",
    fontSize: 12,
    marginBottom: 15
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
  const passwordRef = useRef(null)
  const authRedirectionFooter = (
    <AuthRedirectButton 
      label="Don't have an account yet ?"
      actionLabel="Sign up here"
      onPress={() => navigation.navigate("Register")}
    />
  )

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      persist: false
    },

    onSubmit: () => navigation.navigate("Register"),
    validationSchema: loginValidationSchema
  })
  return (
    <AuthContainer
      {...{authRedirectionFooter}}
    >
          <Text style={styles.heading}>Welcome Back!</Text>
          <Text style={styles.intro}>Use your credentials below and login to your account.</Text>
          <CustomTextInput
            reference={null}
            name="email"
            formik={formik}
            iconName="envelope-o"
            label="Email"
            returnKeyLabel="next"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />

          <CustomTextInput
            reference={passwordRef}
            name="password"
            formik={formik}
            iconName="lock-closed-outline"
            label="Password"
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => null }
          />

          <View style={styles.bottom}>
            <CheckBox 
              label="Remember me"
              name="persist"
              formik={formik}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={{textAlign: "right", color: "green"}}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.callToAction}>
            <Text style={{color: "#fff", fontWeight: 700, fontSize: 16, textAlign: "center"}}>Login to your account</Text>
          </TouchableOpacity>
    </AuthContainer>
  )
}

export default Login