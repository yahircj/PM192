import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button } from 'react-native';

// Pantalla de perfil principal
function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil de usuario</Text>
            <Button 
                title="Ver detalles" 
                onPress={() => navigation.navigate('DetallesUsuario')}
                color="green"
            />
        </View>
    );
}

// Pantalla de detalles
function UserDetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles de Usuario</Text>
            <Text>Usando Navegacion Stack</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function Profile() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PerfilUsuario" component={ProfileScreen} />
            <Stack.Screen name="DetallesUsuario" component={UserDetailsScreen} />
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
        marginBottom: 20,
        color: 'green',
    },
});