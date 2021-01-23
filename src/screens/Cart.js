import React from 'react'
import {StyleSheet, View} from 'react-native'
import CartComponet from '../componet/cart/CartComponet'

const styles=StyleSheet.create({
   cart:{

   }
})

const Cart=()=>{
  return(
    <>
    <CartComponet styles={styles.cart} label={'holis'}></CartComponet>
    <CartComponet styles={styles.cart} label={'jgh'}></CartComponet>
    </>
  )
};

export default Cart;