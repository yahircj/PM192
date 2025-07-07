import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ActivityIndicator, Image, TouchableOpacity, Alert, ImageBackground, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = '0d843c11d21d4454b0a203551250707';

  // Buscar coincidencias mientras el usuario escribe (con debounce simple)
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    const timeoutId = setTimeout(() => {
      fetch(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setSuggestions(data);
          } else {
            setSuggestions([]);
          }
        })
        .catch(() => setSuggestions([]));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Cuando el usuario selecciona una ciudad, obtenemos su clima y la agregamos
  const selectCity = async (cityName) => {
    setLoading(true);
    setSuggestions([]);
    setQuery('');
    Keyboard.dismiss();
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(cityName)}&lang=es`
      );
      const data = await response.json();
      if (data.error) {
        Alert.alert("Ciudad no encontrada", data.error.message);
      } else {
        const alreadyExists = citiesWeather.some(c => c.location.name === data.location.name && c.location.country === data.location.country);
        if (!alreadyExists) {
          setCitiesWeather(prev => [...prev, data]);
        } else {
          Alert.alert("Duplicado", `${data.location.name} ya está en la lista.`);
        }
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo obtener el clima.");
    }
    setLoading(false);
  };

  const removeCity = (name, country) => {
    setCitiesWeather(prev => prev.filter(c => !(c.location.name === name && c.location.country === country)));
  };

  const getGradientStyle = (condition) => {
    condition = condition.toLowerCase();
    if (condition.includes("lluvia") || condition.includes("tormenta")) return styles.rainy;
    if (condition.includes("nublado") || condition.includes("cubierto") || condition.includes("niebla")) return styles.cloudy;
    if (condition.includes("soleado") || condition.includes("despejado")) return styles.sunny;
    if (condition.includes("nieve")) return styles.snowy;
    return styles.defaultCard;
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/222x/0a/75/17/0a75173f4f9340114b8e80f4e502f386.jpg' }} // fondo épico
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <Text style={styles.title}>🌎 Clima por Ciudad</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa una ciudad"
            placeholderTextColor="#ccc"
            value={query}
            onChangeText={setQuery}
            autoCorrect={false}
            autoCapitalize="none"
          />
          {/* Lista de sugerencias */}
          {suggestions.length > 0 && (
            <View style={styles.suggestionsContainer}>
              <FlatList
                keyboardShouldPersistTaps="handled"
                data={suggestions}
                keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => selectCity(item.name)}
                    style={styles.suggestionItem}
                  >
                    <Text style={{color:'#000'}}>{item.name}, {item.region ? item.region + ', ' : ''}{item.country}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
          {/* Botón para agregar la ciudad manualmente si se quiere (opcional) */}
          <Button title="Agregar ciudad" onPress={() => selectCity(query)} color="#ffcc00" />
          {loading && <ActivityIndicator size="large" color="#ffffff" style={{ margin: 20 }} />}
          <ScrollView style={{ marginTop: 20 }}>
            {citiesWeather.map((c, index) => (
              <View
                key={`${c.location.name}-${index}`}
                style={[styles.card, getGradientStyle(c.current.condition.text)]}
              >
                <Text style={styles.cityName}>{c.location.name}, {c.location.country}</Text>
                <View style={styles.weatherRow}>
                  <Image
                    source={{ uri: `https:${c.current.condition.icon}` }}
                    style={{ width: 60, height: 60 }}
                  />
                  <View>
                    <Text style={styles.temp}>{c.current.temp_c.toFixed(1)}°C</Text>
                    <Text style={styles.condition}>{c.current.condition.text}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeCity(c.location.name, c.location.country)}>
                  <Text style={styles.remove}>❌ Eliminar</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', padding: 20, paddingTop: 50 },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: 10, textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5 },
  input: { borderWidth: 1, borderColor: '#ffcc00', padding: 12, marginVertical: 10, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.7)', color: '#000' },
  suggestionsContainer: {
    maxHeight: 150,
    backgroundColor: '#fff',
    borderColor: '#ffcc00',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#ffcc00',
    borderBottomWidth: 1,
  },
  card: { padding: 20, marginVertical: 12, borderRadius: 15, backdropFilter: 'blur(10px)', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 8 },
  cityName: { fontSize: 24, fontWeight: 'bold', color: '#fff', textShadowColor: '#000', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5 },
  weatherRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  temp: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  condition: { fontSize: 18, color: '#fff' },
  remove: { color: '#ff8080', marginTop: 15, fontSize: 16, textAlign: 'right' },

  // Gradientes simulados por colores sólidos potentes
  sunny: { backgroundColor: 'rgba(255,215,0,0.6)', borderWidth: 1, borderColor: '#ffeb3b' },
  cloudy: { backgroundColor: 'rgba(176,190,197,0.6)', borderWidth: 1, borderColor: '#90a4ae' },
  rainy: { backgroundColor: 'rgba(174,198,207,0.6)', borderWidth: 1, borderColor: '#4fc3f7' },
  snowy: { backgroundColor: 'rgba(224,247,250,0.6)', borderWidth: 1, borderColor: '#81d4fa' },
  defaultCard: { backgroundColor: 'rgba(240,240,240,0.6)', borderWidth: 1, borderColor: '#ccc' },
});
