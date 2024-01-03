import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import React, {useEffect} from 'react'

const {width, height} = Dimensions.get('window')

const NavDots = ({index, animatedOpacity, animatedScale}) => {
     const opacity = animatedOpacity(index)
     const scale = animatedScale(index)
     return (
          <Animated.View style={[styles.navDots, opacity, scale]}></Animated.View>
     )
}

export default NavDots

const styles = StyleSheet.create({
     navDots: {
          width: 7,
          height: 7,
          backgroundColor: '#2cb9b0',
          borderRadius: 100,
          marginHorizontal: 5
     }
})