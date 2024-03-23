import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './InicioScreen';
import JuegosScreen from './JuegosScreen';
import ConfiguracionScreen from './ConfiguracionScreen';
import GraficoScreen from './GraficoScreen';
import VideojuegosScreen from './VideojuegosScreen'
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Barra de navegación personalizada */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigateToScreen('Inicio')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Juegos')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Juegos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Configuracion')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Grafico')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Grafico</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('Datos')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Datos</Text>
        </TouchableOpacity>
      </View>

      {/* Stack Navigator para gestionar las pantallas */}
      <Stack.Navigator initialRouteName="Inicio" headerMode="none">
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Juegos" component={JuegosScreen} />
        <Stack.Screen name="Configuracion" component={ConfiguracionScreen} />
        <Stack.Screen name="Grafico" component={GraficoScreen} />
        <Stack.Screen name="Datos" component={VideojuegosScreen} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgreen',
    paddingVertical: 10,
  },
  navButton: {
    paddingHorizontal: 20,
  },
  navButtonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default HomeScreen;
