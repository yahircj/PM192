
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';


const Texto=()=>{
  const [contenido, setContenido]=useState('hola pokemitas')
  const actualizarTexto=()=>{setContenido('Estado actualizado')}
  return(
        <Text onPress={actualizarTexto}>{contenido}</Text>
  )
}

/*Zona 2 de ejecución 
  MAIN
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Texto > </Texto>
      <Texto > </Texto>
      <Texto > </Texto>
      <Button title= "i´m a button"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona 3 de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
