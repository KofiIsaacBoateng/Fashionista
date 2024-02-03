import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Header from './Header'

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

  return (
    <View style={styles.container}>
        <Header  
            LeftIcon = {<AntDesign name="close" size={18} color="#fff" />}
            title="my profile"
            RightIcon = {<SimpleLineIcons name="bag" size={16} color="#fff" />}
            badgeForRight={true}
        />
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
