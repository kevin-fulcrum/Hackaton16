import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native'
import {windowWidth,windowHeight} from '../Dimensions'

const styles=StyleSheet.create({
  container:{
    alignItems: 'center',
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

const CartComponet=({label})=>{
  return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.cart}>
    <Image
    style={{width:20, height:20}}
    source={{uri: 'https://cdn.icon-icons.com/icons2/692/PNG/512/seo-social-web-network-internet_340_icon-icons.com_61497.png',}}
    />  
    <View>
    <Text style={styles.text}>{label}</Text>
    <Text style={styles.text}>{label}</Text>
    <Text style={styles.text}>{label}</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
};

export default CartComponet;