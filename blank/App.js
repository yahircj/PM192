
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert, TouchableOpacity, Image, TextInput} from 'react-native';
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
  //botones
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);

  //input and alert
  const [nombre, setNombre]= useState('');
  const mostrarAlerta =()=> {
    if(nombre.trim()===''){
      Alert.alert('error', 'Escriba algo');
      alert('escribe algo')
    } else {
      Alert.alert('bienvenido ', `hola ${nombre}, bienvenido a nuestra app`);
      alert('hola ' + nombre + ' bienvenido')
    }
  }

  return (
    <View style={styles.container}>
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
        style={styles.Boton}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.Botontexto}>{contador}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <TouchableOpacity 
      onPress= {()=> alert("La pokebola a sido presionada")}>
        <Image
          source={require('./assets/pokebola.png')}
          style={styles.imagen}
        />
      </TouchableOpacity>

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

  Boton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center'},

  BotonTexto: {
    color: '#345676',
    fontSize: 18},

  imagen: {
    width: 100,
    height: 100},
  textInput: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  Input:{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    color: '#000',
  }
});
