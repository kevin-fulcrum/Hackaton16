import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import CartComponet from '../componet/cart/CartComponet'
import Button from '../componet/button/Button'

const styles=StyleSheet.create({
  contanier:{
    flex: 0.94
   },
  containerEnd: {
    flex: 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  } 
})

const Cart=()=>{
  return(
    <>
    <View style={styles.contanier}>
    <CartComponet styles={styles.cart} label={'holis'}></CartComponet>
    <CartComponet styles={styles.cart} label={'jgh'}></CartComponet>
    </View>
    <View style={styles.containerEnd}>
      <View style={{flex: 0.5, alignItems: 'center'}}>
      <Text>$100.00</Text>
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
      <Button label={'Buy Now'}></Button>
      </View>
    </View>
    </>
  )
};

export default Cart;