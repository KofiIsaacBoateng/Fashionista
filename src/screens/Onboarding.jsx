import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Slide from '../components/Slide'
import Animated, { useAnimatedScrollHandler, interpolateColor, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'


const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      borderBottomLeftRadius: 75
  },
  slider: {
      height: 0.31 * height,
      backgroundColor: 'cyan',
      borderBottomRightRadius: 75
  },

  captions: {
      flex: 1,
      backgroundColor: '#fff'
  },

  underlay: {
    flex: 1
  },

  overlay: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 75
  }

})

const Onboarding = () => {
  let count = 0
  const x = useSharedValue(count)
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x
    }
  })
  const backgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(x.value,
        [0, width, width * 2, width * 3],
        ['#bfeaf5', '#beecc4', '#ffe4d9', '#ffdddd']
      )
    }
  }
  )
  
  return (
    <View style={[styles.container, {flex: 1}]}>
      <Animated.ScrollView 
        style={[styles.slider, backgroundColor]}
        horizontal
        snapToInterval={width}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        decelerationRate='fast'
        onScroll={onScroll}
      >
          <Slide label='Fantastic' />
          <Slide label='Eccentric' right />
          <Slide label='Relaxed'/>
          <Slide label='Flirty' right/>
      </Animated.ScrollView>

      <View style={styles.captions}>
          <Animated.View style={[styles.underlay, {...StyleSheet.absoluteFillObject,}, backgroundColor]}></Animated.View>
          <Animated.View style={styles.overlay}></Animated.View>
      </View>
    </View>
  )
}

export default Onboarding