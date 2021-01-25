import React from 'react'
import {StyleSheet, View, Text, FlatList, Animated} from 'react-native'
import CartComponet from '../componet/cart/CartComponet'
import Button from '../componet/button/Button'
import { useSelector } from 'react-redux'

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

const Cart=({route})=>{
  const scrollX = new Animated.Value(0);
  const carData = useSelector((state)=>state.ProductReducer);
  return(
    <>
    <View style={styles.contanier}>
    <FlatList
    data={carData.products}
    keyExtractor={(item, index) => 'key' + index}
    vertical
    scrollEnabled
    snapToAlignment="center"
    scrollEventThrottle={16}
    decelerationRate="fast"
    showsHorizontalScrollIndicator={false}
    renderItem={(item) => {
        return <CartComponet styles={styles.cart} item={item.item}></CartComponet>;
    }}
    onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: false}
    )}
    />
    </View>
    <View style={styles.containerEnd}>
      <View style={{flex: 0.5, alignItems: 'center'}}>
      <Text>${carData.products[0].price}</Text>
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
      <Button label={'Buy Now'}></Button>
      </View>
    </View>
    </>
  )
};

export default Cart;