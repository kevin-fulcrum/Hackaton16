import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {windowWidth,windowHeight} from '../Dimensions'

const styles=StyleSheet.create({
  cart:{
    width: windowWidth/1.3,
    height: windowHeight/6,
    backgroundColor: '#64b1cc',
    marginVertical: 20,
    borderRadius: 15
  },
  text:{
    fontSize: 20,
    color: '#ffffff'
  }

})

const CartComponet=({label})=>{
  console.warn(label)
  return(
    <TouchableOpacity style={styles.cart}>
    <Text style={styles.text}>s{label}</Text>
    </TouchableOpacity>
  )
};

export default CartComponet;