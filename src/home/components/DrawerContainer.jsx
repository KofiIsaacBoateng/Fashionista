import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Header from './Header'
import { StatusBar } from 'expo-status-bar'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const {height, width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 

    content: {
        height: height * 0.73,
        backgroundColor: "#fff"
    },

    underlayTop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#0c0d34",
        top: 0, 
        left: 0, 
        right: 0,
        bottom: 250
    },

    header: {
        width: "100%",
        height: height * 0.15,
        backgroundColor: "#0c0d34",
        borderBottomRightRadius: 75,
        overflow: "hidden"
    },

    underlayBottom: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#45ae76",
        left: 0, 
        right: 0,
        bottom: 0,
        top: height * 0.5
    },

    overlay: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75
    },

    footer: {
        height: height * 0.12,
        backgroundColor: "#45ae76",
        borderTopLeftRadius: 75,
        flex: 1
    }
})

const DrawerContainer = ({children}) => {
    const navigation = useNavigation()
    const closeBtn = (
        <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
            <AntDesign name="close" size={18} color="#fff" />
        </TouchableOpacity>
    )

    const cartBtn = (
        <TouchableOpacity
            onPress={() => null}
        >
            <SimpleLineIcons name="bag" size={16} color="#fff" />
        </TouchableOpacity>
    )

  return (
    <View style={styles.container}>
        <StatusBar style='light' backgroundColor='#0c0d34' />
        <View style={styles.header}>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "#0c0d34"}} />
            <Header  
                LeftIcon = {closeBtn}
                title="MENU"
                titleColor={"#fff"}
                RightIcon = {cartBtn}
                badgeForRight={true}
            />
            {/* <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
            </View> */}
        </View>
        <View style={[styles.content]}>
            <View style={[styles.underlayTop]} />
            <View style={[styles.underlayBottom]}>
                <Image 
                    source={require("../../../assets/auth/pattern-03.jpg")}
                    style={{width: "100%", height: "100%", borderTopLeftRadius: 75}}
                />
            </View>
            <View style={styles.overlay}>
                {children}
            </View>
        </View>
        <View style={styles.footer}>
            <Image 
                source={require("../../../assets/auth/pattern-03.jpg")}
                style={{width: "100%", height: "100%", borderTopLeftRadius: 75}}

            />
        </View>
    </View>
  )
}

export default DrawerContainer

