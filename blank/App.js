
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert, TouchableOpacity, Image} from 'react-native';
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
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [colorBoton, setColorBoton] = useState('#123456');
  const [contador, setContador] = useState(0);

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
        onPress={() => alert('Me presionaste =P')}
      ></Button>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          disabled
          color="#674323"
          onPress={() => alert('Left button pressed')}
        ></Button>
        <Button
           title="Right button"
           color="#097865"
          onPress={() => alert('Right button pressed')}
        ></Button>
      </View>
      <Button
        title={botonDesactivado ? "Desactivado" : "Desactívame"}
        disabled={botonDesactivado}
        onPress={() => setBotonDesactivado(true)}
      ></Button>
      <TouchableOpacity
        style={styles.dynamicButton}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.dynamicText}>{contador}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <TouchableOpacity
        style={[styles.dynamicButton, { backgroundColor: colorBoton }]}
        onPress={() => setColorBoton(colorBoton === '#1E90FF' ? '#987656' : '#1E90FF')}
      ></TouchableOpacity>
      <TouchableOpacity 
      onPress= {()=> alert("La pokebola a sido presionada")}>
        <Image
          source={require('./assets/pokebola.png')}
          style={styles.imagen}
        />
      </TouchableOpacity>
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

  dynamicButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center'},

  dynamicText: {
    color: '#345676',
    fontSize: 18},

  imagen: {
    width: 100,
    height: 100},

});
