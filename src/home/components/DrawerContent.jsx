import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DrawerContainer from './DrawerContainer'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons" //1. lightening-bolt-outline
import Foundation from 'react-native-vector-icons/Foundation'// 2. heart
import Ionicons from 'react-native-vector-icons/Ionicons' // 3. person
import EvilIcons from 'react-native-vector-icons/EvilIcons' // 4. clock 5. gear
import FontAwesome from 'react-native-vector-icons/FontAwesome' // 6. logout
import AntDesign from 'react-native-vector-icons/AntDesign'
import DrawerNavElement from './DrawerNavElement'
import { StatusBar } from 'expo-status-bar'

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    profilePhoto: {
        width: 75,
        height: 75,
        backgroundColor: "#8df6be",
        borderRadius: 50,
        position: "absolute",
        top: "-8.7%",
        left: "35%"
    },
    userInfo: {
        gap: 5,
        marginTop: 45,
        marginBottom: 30,
    },

    name: {
        fontWeight: "900", 
        fontSize: 25,
        color: "#000",
        textAlign: "center",
        letterSpacing: 0.5
    },

    email: {
        fontSize: 12, 
        color: "#2228",
        fontWeight: "500",
        textAlign: "center"
    }
})

const DrawerContent = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar style="light" backgroundColor="#0c0d34" />
        <DrawerContainer>
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={[styles.profilePhoto]} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>James Bran</Text>
                    <Text style={styles.email}>jamesBran123@gmail.com</Text>
                </View>


                    <DrawerNavElement 
                        label="Outfit Ideas"
                        color="#45ae76"
                        action={() => null}
                        icon={<MaterialCommunityIcons name="lightning-bolt" size={25} color="white" />}
                    />

                    <DrawerNavElement 
                        label="Favorite Outfits"
                        count={34}
                        color="firebrick"
                        action={() => null}
                        icon={<Foundation name="heart" size={20} color="white" />}
                    />

                    <DrawerNavElement 
                        label="Edit Profile"
                        color="orangered"
                        action={() => null}
                        icon={<Ionicons name="person" size={19} color="white" />}
                    />

                    <DrawerNavElement 
                        label="Transaction History"
                        count={12}
                        color="#c12783"
                        action={() => null}
                        icon={<AntDesign name="clockcircle" size={18} color="white" />}
                    />

                    <DrawerNavElement 
                        label="Notification Settings"
                        color="blue"
                        action={() => null}
                        icon={<FontAwesome name="gear" size={20} color="white" />}
                    />

                    <DrawerNavElement 
                        label="Logout"
                        color="black"
                        action={() => null}
                        icon={<Ionicons name="arrow-undo" size={17} color="white" />}
                    />
            </View>
        </DrawerContainer>
    </SafeAreaView>
  )
}

export default DrawerContent