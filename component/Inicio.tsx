import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Inicio = ({ navigation }: { navigation: NavigationProp<any> }) => {
 

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/icono.png')} style={styles.logo} />
                <Text>La aplicación permite a los usuarios agregar nuevas recetas, ver la lista de recetas disponibles, 
                ver los detalles de una receta en específica y eliminar recetas existentes.
                Dueño de la aplicación: Alba Zúñiga.
                 Nombre Estudiante: Alba Zúñiga.</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        marginBottom: 30,
        alignSelf: 'center',
    },
});

export default Inicio;