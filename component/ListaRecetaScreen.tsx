import React, { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Receta {
    id: string;
    nombre: string;
    ingredientes: string;
}

const ListaRecetaScreen = () => {
    const [recetas, setRecetas] = useState<Receta[]>([]);
    const [busqueda, setBusqueda] = useState('');
    const [recetasFiltradas, setRecetasFiltradas] = useState<Receta[]>([]);

    const handleEliminarReceta = (id: string) => {
        setRecetas(recetas.filter((receta) => receta.id !== id));
        alert('Se eliminó el registro correctamente');
    };

    const handleBuscarRecetas = () => {
        const recetasFiltradas = recetas.filter((receta) =>
          receta.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
        setRecetasFiltradas(recetasFiltradas);
      };

    const handleAgregarReceta = (receta: Receta) => {
        setRecetas([...recetas, receta]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/icono.png')} style={styles.logo} />
            </View>
            <View style={styles.busquedaContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar recetas"
                    value={busqueda}
                    onChangeText={setBusqueda}
                />
                <Button title="Buscar" onPress={handleBuscarRecetas} />
            </View>
            <FlatList
                data={recetasFiltradas.length > 0 ? recetasFiltradas : recetas}
                keyExtractor={(receta) => receta.id}
                renderItem={({ item }) => (
                    <View style={styles.recetaContainer}>
                        <Text style={styles.nombreReceta}>{item.nombre}</Text>
                        <Text style={styles.ingredientes}>{item.ingredientes}</Text>
                        <TouchableOpacity
                            style={styles.botonEliminar}
                            onPress={() => handleEliminarReceta(item.id)}
                        >
                            <Text style={styles.textoBotonEliminar}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <AgregarRecetaScreen onAgregarReceta={handleAgregarReceta} />
        </View>
    );
};

const AgregarRecetaScreen = ({ onAgregarReceta }: { onAgregarReceta: (receta: Receta) => void }) => {
    const [nombreReceta, setNombreReceta] = useState('');
    const [ingredientes, setIngredientes] = useState('');

    const handleAgregarReceta = () => {
        if (nombreReceta.length === 0) {
            alert('Por favor, ingresa el nombre de la receta');
        } else if (ingredientes.length === 0) {
            alert('Por favor, ingresa los ingredientes de la receta');
        } else {
            const nuevaReceta: Receta = {
                id: Math.random().toString(),
                nombre: nombreReceta,
                ingredientes: ingredientes,
            };
            onAgregarReceta(nuevaReceta);
            setNombreReceta('');
            setIngredientes('');
        }
    };

    return (
        <View style={styles.agregarRecetaContainer}>
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
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        height: undefined,
        aspectRatio: 4,
        marginBottom: 20,
        alignSelf: 'center',
    },
    busquedaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        width: '70%',
        height: 40,
        borderColor: 'navy',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    recetaContainer: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    nombreReceta: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    ingredientes: {
        marginBottom: 5,
    },
    botonEliminar: {
        backgroundColor: 'red',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textoBotonEliminar: {
        color: 'white',
        fontWeight: 'bold',
    },
    agregarRecetaContainer: {
        marginBottom: 10,
    },
});

export default ListaRecetaScreen;