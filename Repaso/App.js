import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Button, View, Text, Alert, TextInput, Switch, ImageBackground, SafeAreaView
} from 'react-native';
import React, { useState, useEffect } from 'react';

// Splash screen con logo
const FrogbyteSplash = () => {
  return (
    <ImageBackground source={require('./assets/LogoSplash.jpg')} style={styles.fondoSplash}>
      <View style={styles.contenidoSplash}>
        <Text style={styles.tituloSplash}>Bienvenido a frogbyte</Text>
      </View>
    </ImageBackground>
  );
};

export default function App() {
  // Estados
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Temporizador para quitar splash
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  const mostrarAlerta = () => {
    // Validación: campos vacíos
    if (nombre.trim() === '' || correo.trim() === '') {
      Alert.alert('Error', 'Por favor completa todos los datos');
      return;
    }

    // Validación: no aceptó términos
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    // Todo correcto → mostrar datos
    Alert.alert(
      'Registro exitoso',
      `Nombre: ${nombre}\nCorreo: ${correo}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.containerSplash}>
      {showSplash ? (
        <FrogbyteSplash />
      ) : (
        <ImageBackground source={require('./assets/LogoSplash.jpg')} style={styles.fondoSplash}>
          <View style={styles.formulario}>
            <Text style={styles.textoLabel}>Nombre completo:</Text>
            <TextInput
              style={styles.input}
              placeholder='Escribe tu nombre completo'
              onChangeText={setNombre}
              value={nombre}
            />

            <Text style={styles.textoLabel}>Correo electrónico:</Text>
            <TextInput
              style={styles.input}
              placeholder='ejemplo@correo.com'
              keyboardType='email-address'
              onChangeText={setCorreo}
              value={correo}
            />

            <View style={styles.terminosContainer}>
              <Text style={styles.textoLabel}>Aceptar términos:</Text>
              <Switch
                value={aceptaTerminos}
                onValueChange={setAceptaTerminos}
              />
            </View>

            <Button title='Registrarse' onPress={mostrarAlerta} />
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  fondoSplash: {
    flex: 1,
    justifyContent: 'center',
  },
  contenidoSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  tituloSplash: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  formulario: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  textoLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
});
