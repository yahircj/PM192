import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, ImageBackground, SafeAreaView, StatusBar,
  ScrollView, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator, Switch
} from 'react-native';

export default function App() {
  // Estado para el splash
  const [mostrarSplash, setMostrarSplash] = useState(true);

  // Estado para saludo personalizado comentado porque se utiliza el mismo estado para el formulario
  /*  const [nombre, setNombre] = useState(''); */

  // Estado para el contador
  const [contador, setContador] = useState(0);

  // Estado para mostrar el indicador de carga
  const [cargando, setCargando] = useState(false);

  // Estado del switch
  const [isEnabled, setIsEnabled] = useState(false);

  // Lista de nombres
  const [nombres, setNombres] = useState([
    'Polo', 'Marlen', 'Baruch', 'Miguel'
  ]);
  const [nuevoNombre, setNuevoNombre] = useState('');

  // Para manejar el splash por 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Función para mostrar saludo
  const saludar = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa tu nombre.');
    } else {
      Alert.alert('Bienvenido', `Hola ${nombre}, ¡bienvenido a nuestra app!`);
    }
  };

  // Función para iniciar carga simulada
  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000);
  };

  // Función para agregar nombre a la lista
  const agregarNombre = () => {
    const limpio = nuevoNombre.trim();
    if (limpio.length > 0) {
      setNombres([...nombres, limpio]);
      setNuevoNombre('');
    }
  };
  // Estados para el formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Función para simular el login con validaciones
  const mostrarAlerta = () => {
    // Validación: campos vacíos
    if (nombre.trim() === '' || correo.trim() === '') {
      Alert.alert('Error', 'Por favor completa todos los datos');
      return;
    }

    // Validación: formato de correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido');
      return;
    }

    // Validación: no aceptó términos
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    // Todo correcto 
    Alert.alert(
      'Registro exitoso',
      `Nombre: ${nombre}\nCorreo: ${correo}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.contenedor}>
      <StatusBar barStyle="light-content" />

      {mostrarSplash ? (
        <ImageBackground
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sFGigtG_DXSTYF3mNHP-R8UOZc2JHMy16A&s' }}
          style={styles.splash}
        >
          <View style={styles.overlay}>
            <Text style={styles.splashTexto}>Bienvenido a Mi App</Text>
          </View>
        </ImageBackground>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContenido}>
          <Text style={styles.tituloPrincipal}>Pantalla Principal</Text>

          {/* Input para ingresar nombre */}
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            placeholderTextColor="#999"
            value={nombre}
            onChangeText={setNombre}
          />

          {/* Botón para mostrar alerta */}
          <Button
            title="Saludar"
            onPress={saludar}
            color="#007bff"
          />

          {/* Contador con TouchableOpacity */}
          <TouchableOpacity
            style={styles.botonContador}
            onPress={() => setContador(contador + 1)}
          >
            <Text style={styles.textoContador}>
              Contador: {contador}
            </Text>
          </TouchableOpacity>

          {/* Botón para mostrar ActivityIndicator */}
          {cargando ? (
            <ActivityIndicator size="large" color="tomato" style={{ margin: 15 }} />
          ) : (
            <Button
              title="Iniciar carga"
              onPress={iniciarCarga}
              color="#28a745"
            />
          )}

          {/* Switch para alternar entre mensajes */}
          <View style={styles.switchFila}>
            <Text style={styles.textoSwitch}>
              {isEnabled ? "¡Switch Activado!" : "Switch Desactivado"}
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={() => setIsEnabled(previous => !previous)}
              value={isEnabled}
            />
          </View>

          {/* Lista editable de nombres */}
          <Text style={styles.subTitulo}>Lista de Nombres</Text>

          <View style={styles.filaInput}>
            <TextInput
              style={styles.inputNombre}
              placeholder="Nuevo nombre"
              placeholderTextColor="#999"
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
              onSubmitEditing={agregarNombre}
            />
            <TouchableOpacity style={styles.btnAgregar} onPress={agregarNombre}>
              <Text style={styles.textoBtnAgregar}>Agregar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listaNombres}>
            {nombres.map((item, index) => (
              <View key={index} style={styles.itemNombre}>
                <Text style={styles.textoNombre}>{item}</Text>
              </View>
            ))}
          </View>
          <ScrollView contentContainerStyle={styles.formulario}>
            <Text style={styles.tituloPrincipal}>Registro / Login</Text>

            <Text style={styles.textoLabel}>Nombre completo:</Text>
            <TextInput
              style={styles.input}
              placeholder='Escribe tu nombre completo'
              onChangeText={setNombre}
              value={nombre}
            />

            <Text style={styles.textoLabel}>Correo electrónico:</Text>
            <TextInput
              style={styles.input}
              placeholder='ejemplo@correo.com'
              keyboardType='email-address'
              onChangeText={setCorreo}
              value={correo}
            />

            <View style={styles.terminosContainer}>
              <Text style={styles.textoLabel}>Aceptar términos:</Text>
              <Switch
                value={aceptaTerminos}
                onValueChange={setAceptaTerminos}
              />
            </View>

            <Button title='Registrarse' onPress={mostrarAlerta} color="#28a745" />
          </ScrollView>
        </ScrollView>

      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1 },
  splash: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10
  },
  splashTexto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  scrollContenido: {
    padding: 20,
    alignItems: 'center'
  },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1
  },
  botonContador: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center'
  },
  textoContador: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  switchFila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  textoSwitch: {
    fontSize: 18,
    marginRight: 10
  },
  subTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  filaInput: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15
  },
  inputNombre: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10
  },
  btnAgregar: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  textoBtnAgregar: {
    color: '#fff',
    fontWeight: 'bold'
  },
  listaNombres: {
    width: '100%'
  },
  itemNombre: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderColor: '#dee2e6',
    borderWidth: 1
  },
  textoNombre: {
    fontSize: 16
  },
  formulario: {
    padding: 20,
    alignItems: 'center'
  },
  textoLabel: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginVertical: 5
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  }

});
