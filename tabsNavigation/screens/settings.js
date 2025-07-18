import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuraciones de usuario</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function Settings() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Configuraciones" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'blue',
    },
});