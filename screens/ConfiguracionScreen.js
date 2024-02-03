import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ConfiguracionScreen = () => {
  return (
    <View style={styles.container}>

      {/* Ejemplo de opción de configuración 1 */}
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Opción 1: Ajuste de notificaciones</Text>
      </TouchableOpacity>

      {/* Ejemplo de opción de configuración 2 */}
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Opción 2: Tema de la aplicación</Text>
      </TouchableOpacity>

      {/* Puedes agregar más opciones de configuración según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
});

export default ConfiguracionScreen;

