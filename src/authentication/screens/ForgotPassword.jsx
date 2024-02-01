import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import AuthContainer from '../components/AuthContainer'
import { AuthRedirectButton } from '../components/Button'
import { useFormik } from 'formik'
import { forgotPasswordEmailValidationSchema } from '../helpers/authSchemas'
import { CustomTextInput } from '../components/CustomInputs'
import { FailedState, SuccessState } from '../components/forgotPasswordSuccessState'

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    heading: {
      fontSize: 33,
      fontWeight: "800",
      color: "#333"
    },
    intro: {
      textAlign: "center",
      marginTop: 10,
      marginBottom: 30,
      color: "#333a",
      width: width * 0.9,
      lineHeight: 20
    },
    callToAction: {
      marginTop: 50,
      paddingVertical: 18,
      width: width * 0.8,
      backgroundColor: "green",
      borderRadius: 100
    }
})

const ForgotPassword = ({navigation}) => {
    const [sending, setSending] = useState(false)
    const authRedirectionFooter = (
      <AuthRedirectButton 
        label="Don't have an account yet ?"
        actionLabel="Sign up here"
        onPress={() => navigation.navigate("Register")}
      />
    )

    const formik = useFormik({
      initialValues: {
        email: ""
      },
      onSubmit: () => {
        setTimeout(() => {
          setSending(prev => true)
        }, 500)
      },
      validationSchema: forgotPasswordEmailValidationSchema
    })

  return (
    <AuthContainer
      {...{authRedirectionFooter}}
    >
    {!sending &&
      <>
          <Text style={[styles.heading]}>We got you!</Text>
          <Text style={[styles.intro]}>We will send an email to the address you provide below with a link to reset your password.</Text>

          <CustomTextInput 
            name="email"
            formik={formik}
            label="Email"
            iconName="envelope-o"
            returnKeyType="send"
            returnKeyLabel="send"
            onSubmitEditing={() => {
              setTimeout(() => {
                setSending(prev => true)
              }, 500)
            }}
          />

          <TouchableOpacity
            style={styles.callToAction}
            onPress={() => {
              setTimeout(() => setSending(prev => true), 500)
            }}
          >
            <Text style={{textAlign: "center", color: "#fff", fontSize: 16, textTransform: "capitalize"}}>Send </Text>
          </TouchableOpacity>
      </>
    }

    {sending && formik.errors.email &&
      <FailedState setSending={setSending}  reset = {formik.resetForm} displayMessage="Oops!" activityMessage="Something went wrong. Please try again." />
    }

    {sending && !formik.errors.email && 
      <SuccessState displayMessage="Success!" activityMessage="Please check your mail for link to reset your password." />
    }
    </AuthContainer>
  )
}

export default ForgotPassword