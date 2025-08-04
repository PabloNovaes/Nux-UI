import { BottomTabBar } from '@/components/bottom-tab-bar';
import { Components } from '@/pages/components';
import { Home } from '@/pages/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; // <- Faltando no seu código

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer> {/* <- Isso é essencial */}
            <Tab.Navigator
                tabBar={(props) => <BottomTabBar {...props} />}
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Components" component={Components} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}