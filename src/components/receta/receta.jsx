import React, { useState } from "react";
import { TextInput, Text, View, Button, StyleSheet } from "react-native"

const Receta = (props) => {

    const [titulo, setTitulo] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [procedimiento, setProcedimiento] = useState('')
    
    return (
        <>
        <View styles={{backgroundColor: '#00000'}}>
            <View style={styles.generalSpace}>
                <Text>Nombre del plato:</Text>
                <TextInput style={styles.inputPpal}
                    onChangeText={(value) => {setTitulo(value)}} 
                    value={titulo}
                />
            </View>
            <View style={styles.generalSpace}>
                <Text >Ingredientes:</Text>
                <TextInput style={styles.inputText}
                    onChangeText={(value) => {setIngredientes(value)}}
                    value={ingredientes} 
                />
            </View>
            <View style={styles.generalSpace}>
                <Text>Procedimiento:</Text>
                <TextInput style={styles.inputText}
                    onChangeText={(value) => {setProcedimiento(value)}}
                    value={procedimiento}
                />
            </View>
            <Button title="Siguiente" color="#4cd137" />
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    generalColor: {
        backgroundColor: '#4cd137',
    },
    inputText: {
        height: 200,
        width: 'auto',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(76, 209, 55, 0.3)',
    },
    inputPpal:{
        borderWidth: 1,
        width: 300,
        borderRadius: 5,
        borderColor: 'rgba(76, 209, 55, 0.3)',
    },
    generalSpace:{
        margin: 5,
    }
  });

export default Receta;