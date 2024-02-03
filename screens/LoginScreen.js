import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const handleFacebookLogin = () => {
    // Lógica para abrir Facebook (puedes agregar esto más adelante si es necesario)
  };

  const handleGoogleLogin = () => {
    // Lógica para abrir Google (puedes agregar esto más adelante si es necesario)
  };


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'UTD' && password === '12345') {
      navigation.navigate('Home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <Image
        source={require('../assets/user.jpg')} // Ruta de la imagen
        style={styles.image}
      />
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Ingresar" onPress={handleLogin} />

      <Text style={styles.title}>Ingresa con:</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleFacebookLogin} style={[styles.iconButton, { marginRight: 30 }]}>
          <Icon name="facebook" size={40} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoogleLogin} style={[styles.iconButton, { marginLeft: 30 }]}>
          <Icon name="google" size={40} color="red" />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Hace la imagen circular
    marginBottom: 20,
  },
  iconContainer: {
  flexDirection: 'row', // Muestra los íconos horizontalmente
  justifyContent: 'space-between', // Distribuye los íconos uniformemente en el contenedor
  marginVertical: 20,
  backgroundColor: 'white', // Fondo blanco
  borderRadius: 15, // Borde redondeado
  padding: 15, // Espacio interno
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
