import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slide from '../../components/Slide'
import { ScrollView } from 'react-native-gesture-handler'


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      borderBottomLeftRadius: 75
  },
  slider: {
      flex: height * 0.61,
      backgroundColor: 'cyan',
  },

  captions: {
      flex: 1,
      backgroundColor: '#fff'
  }

})

const Onboarding = () => {
  const {width, height} = Dimensions.get("window")
  return (
    <View style={[{flex: 1}]}>
      <ScrollView 
        style={styles.slider}
        horizontal
        snapToInterval={width}
        bounces={true}
      >
          <Slide label='Fantastic' />
          <Slide label='Eccentric' right />
          <Slide label='Look Good'/>
          <Slide label='Superfly' right/>
      </ScrollView>

      <View style={styles.captions}>
          <View style={styles.underlay}></View>
          <View style={styles.overlay}></View>
      </View>
    </View>
  )
}

export default Onboarding