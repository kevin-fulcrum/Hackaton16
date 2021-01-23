import React from 'react'
import {StyleSheet} from 'react-native'
import CartComponet from '../cart/CartComponet'

const styles=StyleSheet.create({
   container: {
       flex: 1
   }
})

const Cart=()=>{
  return(
    <CartComponet styles={styles.container} label={'jgh'}></CartComponet>
  )
};

export default Cart;