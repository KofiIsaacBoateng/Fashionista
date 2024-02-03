import { createDrawerNavigator } from "@react-navigation/drawer";
import OutfitIdeas from "../home/screens/OutfitIdeas"
import Screen2 from "../home/screens/Screen2"
import Screen3 from "../home/screens/Screen3"
import Screen4 from "../home/screens/Screen4"
import DrawerContent from "../home/components/DrawerContent";
import { Dimensions } from "react-native";


const Drawer = createDrawerNavigator()
const {width, height} = Dimensions.get("window")

const HomeNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={DrawerContent}
            drawerStyle ={{width: width * 0.8}}
            screenOptions={() => ({
                header: () => null
            })}
        >
            <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
            <Drawer.Screen name="Screen2" component={Screen2} />
            <Drawer.Screen name="Screen3" component={Screen3} />
            <Drawer.Screen name="Screen4" component={Screen4} />
        </Drawer.Navigator>
    )
}


export default HomeNavigation