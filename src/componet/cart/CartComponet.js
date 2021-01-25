import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import {windowWidth,windowHeight} from '../Dimensions'

const styles=StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: 80,
    marginBottom: -50
  },
  cart:{
    width: windowWidth/1.3,
    height: windowHeight/6,
    backgroundColor: '#64b1cc',
    marginVertical: 20,
    borderRadius: 15,
    flexDirection: 'row'
  },
  text:{
    fontSize: 20,
    color: '#ffffff'
  },

})

const CartComponet=({item})=>{
  return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.cart}>
    <Image
    style={{width:200, height:200, marginTop: -50, marginLeft: -30}}
    source={{uri: item.url,}}
    />  
    <View style={{marginTop: 20}}>
    <Text style={styles.text}>{item.descripcion}</Text>
    <Text style={styles.text}>{item.price}</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
};

export default CartComponet;