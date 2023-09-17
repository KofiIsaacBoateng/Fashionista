import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Slide from '../components/Slide'
import Animated, { useAnimatedScrollHandler, interpolateColor, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import data from '../helpers/data'
import Button from '../components/Button'


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
      backgroundColor: '#fff',
      width: width * data.length,
  },

  underlay: {
    flex: 1
  },

  overlay: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#0c0d34'

  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16, 
    fontWeight: '500',
    lineHeight: 25,
    marginBottom: 25
  }

})

const Onboarding = () => {
  const x = useSharedValue(0)
  const translateX = useSharedValue(0)
  const scrollRef = useRef(null)

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x
      translateX.value = -event.contentOffset.x
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
          <Animated.View style={[styles.underlay, {...StyleSheet.absoluteFillObject,}, backgroundColor]}/>
          <Animated.View style={[styles.overlay, transform]}>
              {data.map((item, index) => (
                  <Animated.View key={index} style={[{width, padding: 40}]}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.subTitle}>{item.subTitle}</Text>
                      <Button 
                          index={index} 
                          onPress={() => {
                              if(scrollRef.current){
                                  scrollRef.current
                                  .scrollTo({x: width * (index + 1)})
                              }
                          }}
                      />
                  </Animated.View>
              ))}
          </Animated.View>
      </View>
    </View>
  )
}

export default Onboarding