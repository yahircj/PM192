
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';




/*Zona 2 de ejecución 
  MAIN
*/
export default function App() {
  return (
    <View>
      <Button
      title= "Presioname"
      color= '#345456'
      onPress={()=>alert('Me has presionado')}
      >

      </Button>
      <View style={styles.contenedor}>
        <Button
        title= "Izquierda"
        color= '#345456'
        ></Button>
        <Button
        title= "Derecha"
        color= '#657453'
        >
        </Button>
      </View>
    </View>
  );
}

/*Zona 3 de estilos */
const styles = StyleSheet.create({
contenedor: {
  flexDirection: 'row',
  justifyContent: 'space-between'
},
Boton: {
  marginTop: 10,
  alingItems: 'center',
  backgroundColor: '#234354'
},
TextoBoton: {
  color: '#124354',
  fontSize: 18,
},
Imagen:{
  width: 100,
  height: 100
}
});
