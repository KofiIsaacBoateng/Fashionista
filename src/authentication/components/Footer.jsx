import { Dimensions, StyleSheet, Image, View } from 'react-native'
import React from 'react'
// import Svg, { Path, G,  } from "react-native-svg"

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    socialLogins: {
        width,
        flexDirection: "row",
        justifyContent: "center",
        gap: 35,
        marginVertical: 15
    },

    socialIcon: {
        backgroundColor: "#fff",
        borderRadius: 75,
        padding: 20,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})


// const GoogleLogin = () => {
//     return (
//         <View style={styles.socialIcon}>
//             <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="google-search">
//                 <G data-name="Layer 2">
//                     <G data-name="Layer 3">
//                         <Path fill="none" d="M0 0h24v24H0z"></Path>
//                         <Path fill="#fff" d="M1 12C1 4 4 1 12 1s11 3 11 11-3 11-11 11S1 20 1 12"></Path>
//                         <Path fill="#ea4335" d="M10.84 7.65a5.24 5.24 0 0 1 4.35.83c.65-.6 1.26-1.24 1.86-1.88a7.46 7.46 0 0 0-5.28-1.78 7.29 7.29 0 0 0-6.19 3.91l2.25 1.82a4.57 4.57 0 0 1 3.01-2.9Z"></Path>
//                         <Path fill="#fab908" d="M7.84 13.46a4.22 4.22 0 0 1 0-2.91L5.58 8.73A6.57 6.57 0 0 0 4.8 12a6.67 6.67 0 0 0 .81 3.28l2.25-1.77a.14.14 0 0 0-.02-.05Z"></Path>
//                         <Path fill="#34a853" d="m7.86 13.52-2.25 1.77a7.23 7.23 0 0 0 4.15 3.52 7.54 7.54 0 0 0 7.13-1.25l-2.12-1.77a3.18 3.18 0 0 1-.8.41 4.65 4.65 0 0 1-6.11-2.68Z"></Path>
//                         <Path fill="#0066d9" d="M17.68 16.75A8 8 0 0 0 19.17 11h-7v2.45c1.41 0 2.81 0 4.21.05a4.34 4.34 0 0 1-1.58 2.31l2.12 1.77a5.51 5.51 0 0 0 .76-.83Z"></Path>
//                     </G>
//                 </G>
//             </Svg>
//         </View>
//     )
// }

// const FacebookLogin = () => {
//     return (
//         <View style={styles.socialIcon}>
//             <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="apple">
//                 <Path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></Path>
//             </Svg>
//         </View>
//     )
// }


// const AppleLogin = () => {
//     return (
//         <View style={styles.socialIcon}>
//             <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="apple">
//                 <Path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></Path>
//             </Svg>
//         </View>
//     )
// }




const FooterSocialLogins = () => {
  return (
    <View style={styles.socialLogins}>
        <View style={styles.socialIcon}>
            <Image 
                source={require("../../assets/auth/google-search.png")}
                style={{width: 25, height: 25}}
            />
        </View>

        <View style={styles.socialIcon}>
            <Image 
                source={require("../../assets/auth/facebook.png")}
                style={{width: 25, height: 25}}
            />
        </View>

        <View style={styles.socialIcon}>
            <Image 
                source={require("../../assets/auth/apple.png")}
                style={{width: 25, height: 25}}
            />
        </View>
    </View>
  )
}

export default FooterSocialLogins

