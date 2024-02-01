import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('window')

const Welcome = () => {
     const navigation = useNavigation()
  return (
    <View style={[styles.container]}>
          <View style={[styles.main]}>
               <Image
                    source={require('../../../assets/7.png')}
                    style={[{
                         width: width,
                         height: ((width + 80) * 500) / width,
                         transform: [
                              {translateY: 50}
                         ],
                    }]}
               />
          </View>
          <View style={styles.footer}>
               <View style={styles.back}/>
               <View style={styles.front}>
                    <Text style={styles.title}>Let's get started</Text>
                    <Text style={styles.subTitle}>Login to your account below or signup for an amazing experience</Text>
                    <TouchableOpacity 
                         onPress={() => navigation.navigate('Login')}
                    >
                         <View style={[
                              styles.button, 
                              {backgroundColor: '#2cb9b0'}
                         ]}>
                              <Text style={[styles.label, {color: '#fff'}]}>
                                   Have an account? Login.
                              </Text>
                         </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigation.navigate('Register')}
                    >
                         <View style={[
                              styles.button, 
                              {backgroundColor: '#aaa3'}
                         ]}>
                              <Text style={[styles.label, {color: '#222'}]}>
                                   Join us, it's free.
                              </Text>
                         </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                         onPress={() => navigation.navigate('ForgotPassword')}
                    >
                         <View style={[
                              styles.button, 
                         ]}>
                              <Text style={[styles.label, {color: '#222'}]}>
                                   Forgot password?
                              </Text>
                         </View>
                    </TouchableOpacity>
               </View>
          </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          height
     },

     main: {
          height: height * 0.51,
          borderBottomRightRadius: 75,
          backgroundColor: '#aaa3',
          overflow: 'hidden',
     },

     footer: {
          flex: 1,
     },

     back: {
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          width,
          backgroundColor: '#aaa3'
     },

     front: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 75,
          width,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 50
     },

     title: {
          textAlign: 'center',
          fontSize: 22,
          fontWeight: '700',
          marginBottom: 15,
          color: '#0c0d34'
     
     },
     subTitle: {
          textAlign: 'center',
          fontSize: 15, 
          fontWeight: '500',
          lineHeight: 20,
          marginBottom: 15
     },

     button: {
          paddingHorizontal: 25,
          paddingVertical: 15,
          borderRadius: 30,
          marginVertical: 10,
          width: width - 100,
          alignItems: 'center',
          justifyContent: 'center'
     },
     label: {
          fontSize: 17,
          fontWeight: '600'
     }

})