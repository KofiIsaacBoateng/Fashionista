import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Slide from '../components/Slide'
import Animated, { useAnimatedScrollHandler, interpolateColor,interpolate, useSharedValue, useAnimatedStyle, Extrapolate } from 'react-native-reanimated'
import data from '../helpers/data'
import SubText from '../components/SubText'
import NavDots from '../components/NavDot'
import { StatusBar } from 'expo-status-bar'

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
      flex: 1,
      borderBottomLeftRadius: 75,
      backgroundColor: '#fff'
  },
  
  slider: {
      height: 0.31 * height,
      borderBottomRightRadius: 75,
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
  },

  imagesContainer: {
    ...StyleSheet.absoluteFillObject,
    borderBottomRightRadius: 75,
    height: height * 0.66,
    overflow: 'hidden',
    width,
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomRightRadius: 75
  },

  image: {
    width: width - 75,
    borderBottomRightRadius: 75
  }
})

const Onboarding = ({navigation}) => {
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
      backgroundColor: interpolateColor(
        x.value,
        [0, width, width * 2, width * 3],
        ['lightgray', '#91b6c8', '#f56fc6', '#afd7d4']
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
    <View style={[styles.container]}>
        <StatusBar style={backgroundColor} />
        <Animated.View style={[styles.imagesContainer, backgroundColor]}>
            {data.map((item, index) => {
                const imageOpacity = useAnimatedStyle(() => ({
                  opacity: interpolate(
                    x.value,
                    [(index -1) * width, (index) * width, (index + 1) * width],
                    [0, 1, 0],
                    // {extrapolateRight: Extrapolate.EXTEND, extrapolateLeft: Extrapolate.EXTEND}
                  )
                }))
                return (
                    <Animated.View  key={index} style={[styles.imageContainer, imageOpacity]}>
                      <Image
                          source={item.src}
                          style={[styles.image, {
                            height: ((width - 75 ) * item.height) / item.width,
                            transform: [
                              {translateY: item.height > 1058 ? 900: item.height > 1000 ? 700 : item.height > 900? 50 : item.height > 800 ? 280 : 200},
                              {translateX: item.right ? -35 : 0}
                            ]
                          }]}
                      />
                    </Animated.View>
                    )
                  })}
        </Animated.View>

      <Animated.ScrollView 
        style={[styles.slider]}
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
                      navigation={navigation}
                  />
                        ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  )
}

export default Onboarding