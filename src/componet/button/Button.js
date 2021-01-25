import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {windowWidth,windowHeight} from '../Dimensions'

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#5fa3b5',
        borderRadius: 10,
        width: windowWidth/2.1,
        height: windowHeight/20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2
    },
    text: {
        fontSize: 15,
        color: '#ffffff',
    }

})

const Button=({label,onPress})=>{
  return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
};

export default Button;