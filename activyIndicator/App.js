import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, Alert, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

const IndicadoresCarga = ({ color, size }) => {
  return <ActivityIndicator style={styles.indicador} color={color} size={size} />;
}

export default function App() {
  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>Uso de ActivityIndicator</Text>
      {cargando ? (
        <IndicadoresCarga color="deepskyblue" size="large" />
      ) : (
        <Text style={styles.textoSecundario}>Presiona el botón para comenzar</Text>
      )}
      <Button title="Iniciar carga" onPress={iniciarCarga} color={"#ff6f61"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccff09',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textoPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: "#2e2e2e",
  },
  textoSecundario: {
    fontSize: 16,
    marginVertical: 20,
    color: "#3a3a3a",
  },
  indicador: {
    marginBottom: 20,
  },
});
