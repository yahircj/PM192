
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const Texto=(props)=>{
  const {children}=props
  return(
        <Text>{children}</Text>
  )
}

/*Zona 2 de ejecución 
  MAIN
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Texto > "Hola"</Texto>
      <Texto > "mundo"</Texto>
      <Texto > "Peregrino" </Texto>
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
