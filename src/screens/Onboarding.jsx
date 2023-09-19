import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Slide from '../components/Slide'
import Animated, { useAnimatedScrollHandler, interpolateColor,interpolate, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import data from '../helpers/data'
import SubText from '../components/SubText'
import NavDots from '../components/NavDot'

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
  },

  underlay: {
      ...StyleSheet.absoluteFillObject
  },

  overlay: {
    flex: 1,
    width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 75,
  },

  overlayDetails: {
      width,
      flexDirection: 'row',
      width: width * data.length
  },

  navDot: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  }
})

const Onboarding = () => {
  const x = useSharedValue(0)
  const translateX = useSharedValue(0)
  const scale = useSharedValue(0)
  const scrollRef = useRef(null)

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x
      translateX.value = -event.contentOffset.x
      scale.value = Math.round(x.value / width)
    }
  })

  const transform = useAnimatedStyle(() => ({
    transform: [
      {translateX: translateX.value}
    ]
  }))

  const backgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(x.value,
        [0, width, width * 2, width * 3],
        ['#bfeaf5', '#beecc4', '#ffe4d9', '#ffdddd']
      )
    }
  }
  )

  const animatedOpacity = (index) => useAnimatedStyle(() => ({
    opacity: interpolate(
         scale.value,
         [index - 3, index - 2,index -1, index, index + 1, index + 2, index + 3],
         [0.15, 0.3, 0.5, 1, 0.5, 0.3, 0.15]
    )
  }))

const animatedScale = (index) =>  useAnimatedStyle(() => ({
    transform: [{
         scale:  interpolate(
              scale.value,
              [index - 3, index - 2,index -1, index, index + 1, index + 2, index + 3],
              [0.7, 0.85, 1, 1.3, 1, 0.85, 0.7]
         )    
    }]
}))
  
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
        ref={scrollRef}
        scrollEventThrottle={1}
      >
          {data.map((item, index) => (
            <Slide key={index} label={item.label} right={item.right} />
          ))}
      </Animated.ScrollView>

      <View style={styles.captions}>
        <Animated.View style={[styles.underlay, backgroundColor]}/>
        <Animated.View style={[styles.overlay]}>
          <Animated.View style={[styles.navDot]}>
            {data.map((_, index) => (
              <NavDots 
                  key={index}
                  index={index}
                  animatedOpacity={animatedOpacity}
                  animatedScale={animatedScale}
              />
            ))}
          </Animated.View>
          <Animated.View style={[styles.overlayDetails, transform]}>
              {data.map((item, index) => (
                  <SubText 
                      key={index}
                      item={item}
                      index={index} 
                      scrollRef={scrollRef}
                  />
                        ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  )
}

export default Onboarding