import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';



const AgregarRecetaScreen = () => {
    const [nombreReceta, setNombreReceta] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [recetas, setRecetas] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState('');



    const handleAgregarReceta = () => {
        if (nombreReceta.length === 0) {
            setErrorMessage('Por favor, ingresa el nombre de la receta');
        } else if (ingredientes.length === 0) {
            setErrorMessage('Por favor, ingresa los ingredientes de la receta');
        } else {
            const nuevaReceta = `${nombreReceta}: ${ingredientes}`;
            setRecetas([...recetas, nuevaReceta]);
            setNombreReceta('');
            setIngredientes('');
            setErrorMessage('');
        }
    };

    return (
      
    
    
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/icono.png')} style={styles.logo} />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Nombre de la receta"
                value={nombreReceta}
                onChangeText={setNombreReceta}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredientes"
                value={ingredientes}
                onChangeText={setIngredientes}
            />
            <Button title="Agregar Receta" onPress={handleAgregarReceta} />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            {recetas.map((receta, index) => (
                <Text key={index} style={styles.receta}>
                    {receta}
                </Text>
            ))}
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
    input: {
        width: '90%',
        height: 60,
        borderColor: 'navy',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    receta: {
        marginBottom: 10,
    },
    logoContainer: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    logo: {
        width: '60%',
        height: undefined,
        aspectRatio: 1,
        marginBottom: 30,
        alignSelf: 'center',
    },
});

export default AgregarRecetaScreen;