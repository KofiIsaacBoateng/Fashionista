import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useRef} from 'react'
import AuthContainer from '../components/AuthContainer'
import { AuthRedirectButton } from '../components/Button'
import { CustomTextInput, CheckBox } from '../components/CustomInputs'
import { useFormik } from 'formik'
import { registerValidationSchema } from '../helpers/authSchemas'
import FooterSocialLogins from '../components/Footer'

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
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 70,
    width: width * 0.8,
  }
})

const Register = ({navigation}) => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const authRedirectionFooter = (
    <View style={{width}}>
      <FooterSocialLogins />
      <AuthRedirectButton 
        label="Already have an account ? "
        actionLabel="Login here"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  )
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      persist: false
    },

    onSubmit: () => navigation.navigate("Home"),
    validationSchema: registerValidationSchema
  })
  return (
    <AuthContainer
      {...{authRedirectionFooter}}
    >
        <View>
          <Text style={styles.heading}>Create account</Text>
          <Text style={styles.intro}>Please provide your name, email, password below</Text>
        </View>

          <CustomTextInput
            reference={nameRef}
            name="name"
            formik={formik}
            iconName="person"
            label="Name"
            returnKeyLabel="next"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />

          <CustomTextInput
            reference={emailRef}
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
          />

          <View style={styles.bottom}>
            <CheckBox 
              label="Remember me"
              name="persist"
              formik={formik}
            />
          </View>

          <TouchableOpacity 
            style={styles.callToAction}
            onPress={formik.handleSubmit}
          >
            <Text style={{color: "#fff", fontWeight: 700, fontSize: 16, textAlign: "center"}}>Join us now</Text>
          </TouchableOpacity>
    </AuthContainer>
  )
}

export default Register