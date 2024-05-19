import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

interface DetalleRecetaScreenProps {
  route: {
    params: {
      numeroReceta: string;
      nombreReceta: string;
      ingredientes: string;
    };
  };
  navigation: NavigationProp<any>;
  onEliminarReceta: (id: string) => void; 
}

const DetalleRecetaScreen = ({ route, navigation, onEliminarReceta }: DetalleRecetaScreenProps) => {
  const { numeroReceta, nombreReceta, ingredientes } = route.params;

  const handleVolver = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/icono.png')} style={styles.logo} />
      </View>
      <Text style={styles.label}>Número de receta:</Text>
      <Text style={styles.text}>{numeroReceta}</Text>

      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.text}>{nombreReceta}</Text>

      <Text style={styles.label}>Ingredientes:</Text>
      <Text style={styles.text}>{ingredientes}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Eliminar" onPress={() => onEliminarReceta(numeroReceta)} color="red" /> {/* Utiliza la prop onEliminarReceta */}
        <Button title="Volver" onPress={handleVolver} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '50%',
    height: undefined,
    aspectRatio: 4,
    marginBottom:20,
    alignSelf:'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default DetalleRecetaScreen;