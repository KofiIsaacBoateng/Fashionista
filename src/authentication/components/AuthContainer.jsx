import { Dimensions, Image, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import FooterSocialLogins from './Footer'

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    width,
  },

  headerImage: {
    width,
    height: "100%",
    borderBottomRightRadius: 75,
  },
  
  underlay: {
    ...StyleSheet.absoluteFillObject,
  },
  
  underlayImage: {
    // transform: [
    //   {"rotate": "360deg"},
    //   // {translateY: 10}
    // ]
  }, 

  content: {
    height: height * 0.7,
    backgroundColor: "#0c0d34"
  },
  overlay: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 75,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
})

const AuthContainer = ({children, authRedirectionFooter}) => {
  const patterns = [
    require("../../../assets/auth/pattern-01.jpg"),
    require("../../../assets/auth/pattern-02.jpg"),
    require("../../../assets/auth/pattern-03.jpg")
  ]  
  return (
    <SafeAreaView style={{flex: 1, height}}>
      <KeyboardAwareScrollView 
        style={[{backgroundColor: "#fff", height}]}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{flex: 1}}
        scrollEnabled={true}
      >
        <View style={[styles.header, {height: 0.1 * height}]}>
            <Image 
              source={patterns[0]}
              style={[styles.headerImage]}
            />
        </View>
        <View style={styles.content}>
            <View style={[styles.underlay]}>
              <Image 
                source={patterns[0]}
                style={[styles.underlayImage, {height: "20%", width}]}
              />
            </View>
            <View style={styles.overlay}>
              {children}
            </View>
        </View>
        <View style={{height: 0.2 * height}}>
          <View style={[styles.underlay, {backgroundColor: "#0c0d34"}]} />
          <FooterSocialLogins />
          {authRedirectionFooter}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
    
  )
}

export default AuthContainer