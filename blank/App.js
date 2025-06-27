
/*Zona de importaciones
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, Alert, TouchableOpacity, Image, TextInput, ScrollView, } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';


const Texto = ({ style }) => {
  const [contenido, setContenido] = useState('hola pokemitas')
  const actualizarTexto = () => { setContenido('Estado actualizado') }
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  )
}

const FondoBienvenida = () => {
  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
    >
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Este es el Splash Screen</Text>
      </View>
    </ImageBackground>
  );
};

const FondoBienvenida_iamgeBackground = () => {
  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
    >
      <View style={styles.contenido}>
        <Text style={styles.titulo}>ImageBackground</Text>
      </View>
    </ImageBackground>
  );
};




/*Zona 2 de ejecución 
  MAIN
*/
export default function App() {

  //Scrollview
  //Lista
  const { nombres, setNombres } = useState([
    'polo', 'marlen', 'alexis', 'baruc', 'Yo', 'Miguel', 'Gaby', 'Marian'
  ])

  //actualizar lista
  const { nuevoNombre, setNuevonombre } = useState('');

  //Posición para el scrollview
  const { contentHeight, setContentHeight } = useState(0);
  const { scrolly, setScrolly } = useState(0);

  const handleScroll = (event) => {
    scrolly(event.nativeEvent.contentOffset.y)
  }
  const scrollbarHeight = scrollHeight * (scrollHeight / contentHeight);
  const scrollbarPosition = scrollY * (scrollHeight / contentHeight);


  const agregarNombre = () => {
    const nombreTrim = nuevoNombre.trim();
    if (nombreTrim.length > 0) {
      setNombres([...nombres, nombreTrim]);
      setNuevonombre('');
    }
  }

  //botones
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);

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

  // imagebackground and splashscreen
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);  // Ocultar splash después de 3 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpiar timer al desmontar
  }, []);

  return (
    <View style={styles.container}>
      <Button title="i´m a button"
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
        onPress={() => alert("La pokebola a sido presionada")}>
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
      <SafeAreaView style={styles.containerSplash}>
        {showSplash ? (
          <FondoBienvenida />
        ) : (
          <View style={styles.mainContent}>
            <Text style={styles.mainText}>Pantalla principal</Text>
            {/* Aquí va el resto de tu app después del splash */

            }
          </View>
        )}
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <FondoBienvenida_iamgeBackground />
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Pase de lista</Text>

        <View style={styles.inputBow}>
          <TextInput style={styles.Input}
            placeholder='Nuevo Nombre'
            placeholderTextColor={"#888"}
            value={nuevoNombre}
            onChangeText={agregarNombre}
            onSubmitEditing={agregarNombre}
            returnKeyType='done'
          ></TextInput>
          <TouchableOpacity style={styles.btnAgregar} onPress={agregarNombre}>
            <Text style={styles.btnAgregar}>Agregar</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View
        style={styles.ScrollView}
        onLayout={(event) => setScrollHeight(event.nativeEvent.layout.height)}
      >
        <ScrollView
          style={styles.scrollArea}
          onContentSizeChange={(w, h) => setContentHeight(h)}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          {nombres.map((nombres, index) => (
            <view key={index} style={styles.item}>
              <Text style={styles.texto}>{nombre}</Text>
            </view>
          ))}
        </ScrollView>
        {contentHeight > scrollHeight && (
          <View style={[styles.scrollBar, { height: scrollbarHeight, top: scrollbarPosition }]} />
        )}
      </View>
      <StatusBar style="light" />
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
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  text: {
    color: 'yellow',
    fontSize: 40,
    height: 100,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  red: { backgroundColor: 'orange' },
  black: { backgroundColor: 'pink' },
  pink: { backgroundColor: 'black' },

  Boton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center'
  },

  BotonTexto: {
    color: '#345676',
    fontSize: 18
  },

  imagen: {
    width: 100,
    height: 100
  },
  textInput: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  Input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  containerSplash: {
    flex: 1,
  },
  fondo: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // para oscurecer la imagen
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputBow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  btnAgregar: {
    backgroundColor: '#123243',
    borderRadius: 19,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  scrollwrapper: {
    position: 'relative',
    height: 300,
  },
  scrollArea: {
    backgroundColor: '#f76f6f6d',
    borderRadius: 12,
    padding: 12,
    height: 300,
    borderWidth: 1,
    borderColor: '"f76f6f6d'
  },
  scrollBar: {
    position: 'absolute',
    width: 8,
    right: 2,
    backgroundColor: '#######',
    borderRadius: 3,
  },
  item: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});
