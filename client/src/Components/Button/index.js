import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const Button = ({onPress, children}) => {
    return (
        <View>
            <TouchableHighlight onPress ={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{ children }</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#FFA734',
        padding: 10,
        marginTop: 20,
        width: 300,
      },
      buttonText: {
        fontSize: 20,
        color: 'white',
      },
})

export default Button;