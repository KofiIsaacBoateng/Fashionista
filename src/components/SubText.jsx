import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Button from './Button'


const {width, height} = Dimensions.get('window')
const SubText = ({item, index, scrollRef}) => {
  return (
     <View key={index} style={[styles.container]}>
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
   </View>
  )
}

export default SubText

const styles = StyleSheet.create({
     container: {
          width,
          paddingHorizontal: 40,
          paddingVertical: 25
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