import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const InicioScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require('../assets/snc.jpg')} // Ruta de la primera imagen
        style={styles.image}
      />
      <Text style={styles.description}>Megaman: BringMe Togeter Uno de los juegos mas esperados este 2024</Text>

      <Image
        source={require('../assets/pakman.jpg')} // Ruta de la primera imagen
        style={styles.image}
      />
        <Text style={styles.description}>Pacman 2024 Uno de los juegos mas recomendados por el publico</Text>

        <Image
        source={require('../assets/pal.jpg')} // Ruta de la primera imagen
        style={styles.image}
      />
        <Text style={styles.description}>Palworld Vendio sifras estratosfericas en sus inicio de pruebas en beta llegando a vender hasta 2 millones de copias y siendo uno de los juegos con mas personas en linea.</Text>

      <Image
        source={require('../assets/mario.jpg')} // Ruta de la segunda imagen
        style={styles.image}
      />
      <Text style={styles.description}>Usuario Crea Nivel Imposible en Mario Maker Te atreves a intentarlo.</Text>

      {/* Agrega más imágenes y texto según sea necesario */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
    color: 'white'
  },
});

export default InicioScreen;
