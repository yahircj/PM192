
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import React, { useState } from 'react';


const Texto=({style})=>{
  const [contenido, setContenido]=useState('hola pokemitas')
  const actualizarTexto=()=>{setContenido('Estado actualizado')}
  return(
        <Text style={[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  )
}

/*Zona 2 de ejecución 
  MAIN
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}> </Texto>
      <Texto style={styles.black}> </Texto>
      <Texto style={styles.pink}> </Texto>
      <Button title= "i´m a button"
      disabled></Button>
      <Button
        title="Presioname"
        color="#841584"
        onPress={() => Alert.alert('Me presionaste =P')}
      ></Button>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          disabled
          color="#674323"
          onPress={() => Alert.alert('Left button pressed')}
        ></Button>
        <Button
           title="Right button"
           color="#097865"
          onPress={() => Alert.alert('Right button pressed')}
        ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

/*Zona 3 de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'base-line',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text:{
    color:'yellow',
    fontSize:40,
    height: 100,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  red:{ backgroundColor:'orange'},
  black:{ backgroundColor:'pink'},
  pink:{backgroundColor:'black'},
});
