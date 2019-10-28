import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function Beautifulbutton () {
    return (
        <TouchableOpacity style={styles.beautifulButton}>
            <Text style={styles.textButton}>Say Hi</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    beautifulButton: {
        backgroundColor: '#666',
        borderColor: '#666',
        padding: 20,
        alignItems: 'center',
        width: 150,
        borderRadius: 10,
        marginTop: 20,
    },

    textButton: {
        color: '#fff',
        fontSize: 20,
    }

});

export default Beautifulbutton;
