import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
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
    transform: [
      {"rotate": "180deg"}
    ]
  }, 

  content: {
    flex: 1,
    backgroundColor: "#0c0d34"
  },
  overlay: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 95,
    borderBottomLeftRadius: 95,
    borderBottomRightRadius: 95
  },
})

const AuthContainer = ({children}) => {
  const patterns = [
    require("../../assets/auth/pattern-01.jpg"),
    require("../../assets/auth/pattern-02.jpg"),
    require("../../assets/auth/pattern-03.jpg")
  ]
  return (
      <SafeAreaView style={[{flex: 1, backgroundColor: "#fff"}]}>
          <View style={[styles.header, {flex: 0.15}]}>
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
          <View style={{flex: 0.2}}>
            <View style={[styles.underlay, {backgroundColor: "#0c0d34"}]} />
            <FooterSocialLogins />
            <TouchableOpacity style={{justifyContent: "center", flexDirection: "row", gap: 10}}>
              <Text style={{color: "#fff"}}>Already have an account ?</Text>
              <Text style={{color: "darkgreen"}}>Sign Up.</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    
  )
}

export default AuthContainer