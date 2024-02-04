import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import HomeBackground from '../components/HomeBackground'
import Header from '../components/Header'


//icons
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
// import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import { ScrollView } from 'react-native-gesture-handler'
import StatUpdate from '../components/StatUpdate'




const {width, height} = Dimensions.get("window")



const styles = StyleSheet.create({
  cards: {
    width: width * 0.7,
    height: "90%",
    backgroundColor: "hsl(12.178217821782177, 98.05825242718448%, 40.3921568627451%)",
    borderRadius: 15,
  },

  footer:{
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
    alignSelf: "center",
    width: width * 0.6
  }
})



const OutfitIdeas = ({navigation}) => {
  const menuBtn = (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={22} color="#0c0d34" />
    </TouchableOpacity>
  )
  
  const cartBtn = (
    <TouchableOpacity
        onPress={() => null}
    >
        <SimpleLineIcons name="bag" size={16} color="#0c0d34" />
    </TouchableOpacity>
)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
      <StatusBar style='dark' backgroundColor='#fff' />
      <View style={{...StyleSheet.absoluteFillObject, flex: 1}}>
        <HomeBackground />
      </View>
      {/***   CONTENT  ***/}
      <Header 
        LeftIcon={menuBtn}
        title={"Outfit Ideas"}
        titleColor={"#0c0d34"}
        RightIcon={cartBtn}
        badgeForRight={true}
      />
      <ScrollView
        horizontal={true}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        contentContainerStyle={{gap: 20, paddingHorizontal: 30, marginHorizontal: 0}}
        style={{height: height * 0.2}}
      >
        <StatUpdate backgroundColor={"#45ae76"} title="New" />
        <StatUpdate backgroundColor={"#0c0d34"} title="Summer" />
        <StatUpdate backgroundColor={"#c12783"} title="Active Wear" />
        <StatUpdate backgroundColor={"orangered"} title="Outfit" />
        <StatUpdate backgroundColor={"firebrick"} title="Accessories" />
        <StatUpdate backgroundColor={"black"} title="Polo" />
        <StatUpdate backgroundColor={"blue"} title="Suits" />
      </ScrollView>

      <View style={{height: height * 0.60, justifyContent: "center", alignItems: "center"}}>
        <View style={styles.cards} />
      </View>
      <View style={[{height: height * 0.15, justifyContent: "center"}]}>
        <View style={styles.footer}>
          <FontAwesome5 size={24} name="long-arrow-alt-left" color="#0c0d34" />
          <View style={{borderWidth: 2, borderColor: "#0c0d34", width: 17, height: 17, borderRadius: 5, backgroundColor: "#fff"}}>
            <FontAwesome5 
              size={24} 
              name="long-arrow-alt-up" 
              color="#0c0d34" 
              style={{transform: [{rotate: "45deg"}], position: "absolute", top: "-100%", right: "-50%", }}
            />
          </View>
          <FontAwesome5 size={24} name="long-arrow-alt-right" color="#0c0d34" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OutfitIdeas

