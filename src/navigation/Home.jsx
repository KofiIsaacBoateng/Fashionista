import { createDrawerNavigator } from "@react-navigation/drawer";
import OutfitIdeas from "../home/screens/OutfitIdeas"
import FavoriteOutfits from "../home/screens/FavoriteOutfits"
import EditProfile from "../home/screens/EditProfile"
import TransactionHistory from "../home/screens/TransactionHistory"
import NotificationSettings from "../home/screens/NotificationSettings"
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
            <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
            <Drawer.Screen name="EditProfile" component={EditProfile} />
            <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
            <Drawer.Screen name="NotificationSettings" component={NotificationSettings} />
        </Drawer.Navigator>
    )
}


export default HomeNavigation