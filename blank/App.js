
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const Texto=(props)=>{
  const {contenido}=props
  return(
        <Text>{contenido}</Text>
  )
}

/*Zona 2 de ejecución 
  MAIN
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido= "Hola"> </Texto>
      <Texto contenido= "mundo"> </Texto>
      <Texto contenido= "Peregrino"> </Texto>
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
