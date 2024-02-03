import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const JuegosScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  <View>
    <Image
      source={require('../assets/maker.jpg')}
      style={styles.image}
    />
    <Text style={styles.description}>Mario Maker $956</Text>
    {renderStars(3)}

    <Image
      source={require('../assets/ark.jpg')}
      style={styles.image}
    />
    <Text style={styles.description}>Ark Survival Ascended $1500</Text>
    {renderStars(4)}

    <Image
      source={require('../assets/godzilla.jpg')}
      style={styles.image}
    />
    <Text style={styles.description}>Godzilla The Game  $1800</Text>
    {renderStars(5)}

    <Image
      source={require('../assets/pal.jpg')}
      style={styles.image}
    />
    <Text style={styles.description}>Palworld  $400</Text>
    {renderStars(5)}



    {/* More content goes here */}
  </View>
</ScrollView>
  );
};

// Función para renderizar estrellas según la puntuación
const renderStars = (rating) => {
  const filledStars = Array(rating).fill('★'); // Crear estrellas llenas
  const emptyStars = Array(5 - rating).fill('☆'); // Crear estrellas vacías

  return (
    <View style={styles.starsContainer}>
      {filledStars.map((star, index) => (
        <Text key={index} style={styles.star}>
          {star}
        </Text>
      ))}
      {emptyStars.map((star, index) => (
        <Text key={index} style={styles.star}>
          {star}
        </Text>
      ))}
    </View>
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
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 20,
    color: 'gold',
    marginRight: 2,
  },
});

export default JuegosScreen;
