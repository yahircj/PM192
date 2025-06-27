import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';


const FrogbyteSplash = () => {
  return (
    <ImageBackground
      source={require('./assets/LogoSplash.jpg')}
      style={styles.fondoSplash}
    >
      <View style={styles.contenidoSplash}>
        <Text style={styles.tituloSplash}>Bienvenido a frogbyte</Text>
      </View>
    </ImageBackground>
  );
};

export default function App() {

  //input and alert
  const [nombre, setNombre] = useState('');
  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      Alert.alert('error', 'Escriba algo');
      alert('escribe algo')
    } else {
      Alert.alert('bienvenido ', `hola ${nombre}, bienvenido a nuestra app`);
      alert('hola ' + nombre + ' bienvenido')
    }
  }

  //SplashScreen
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);  // Ocultar splash después de 3 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpiar timer al desmontar
  }, []);

  return (
    <SafeAreaView style={styles.containerSplash}>
      {showSplash ? (
        <FrogbyteSplash />
      ) : (
        <View style={styles.mainContent}>
          {
          <Text style={styles.textInput}>'Ingresa tu nombre'</Text>

      <TextInput
      style={styles.Input}
      placeholder='Escribe tu nombre'
      onChangeText={setNombre}
      value={nombre}
      >
      </TextInput>
      <Button
      title='Enviar'
      onPress={mostrarAlerta}>

      </Button>
          }
        </View>
      )}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //SPLASH
  containerSplash: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  fondoSplash: {
    flex: 1,
    justifyContent: 'center',
  },
  contenidoSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // para oscurecer la imagen
  },
  tituloSplash: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});
