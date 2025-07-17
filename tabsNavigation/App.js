import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = 'person-outline';
                        } else if (route.name === 'Settings') {
                            iconName = 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#B07BFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        paddingBottom: 5,
                        height: 60,
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}