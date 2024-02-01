import { createDrawerNavigator } from "@react-navigation/drawer";
import Screen1 from "../home/screens/Screen1"
import Screen2 from "../home/screens/Screen2"
import Screen3 from "../home/screens/Screen3"
import Screen4 from "../home/screens/Screen4"
import DrawerContent from "../home/components/DrawerContent";


const Drawer = createDrawerNavigator()

const HomeNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={DrawerContent}
            screenOptions={() => ({
                header: () => null
            })}
        >
            <Drawer.Screen name="Screen1" component={Screen1} />
            <Drawer.Screen name="Screen2" component={Screen2} />
            <Drawer.Screen name="Screen3" component={Screen3} />
            <Drawer.Screen name="Screen4" component={Screen4} />
        </Drawer.Navigator>
    )
}


export default HomeNavigation