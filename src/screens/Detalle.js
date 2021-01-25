import React from 'react'
import {Text, StyleSheet,View,Image} from 'react-native'
import {windowWidth,windowHeight} from '../componet/Dimensions'
import Button from '../componet/button/Button'
import {useDispatch} from 'react-redux'
import Action from '../redux/Action'

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8cc2d1',
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
    },
    image:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detalle: {
        flex: 0.5,
        height: windowHeight/2,
        backgroundColor: '#fbfbfb',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    datosDetalle:{
        flex: 0.88
    },
    botones:{
        flex: 0.12,
        flexDirection: 'row',
        marginHorizontal: 7
    }
})

const Dettalle=({navigation, route})=>{
  const dispatch = useDispatch()
  const orderFun = async()=>{
    await dispatch(Action.setCartProduct(route.params))
    navigation.navigate('Cart',route.params)
  }  
  return(
    <View style={styles.container}>
        <View style={styles.image}>
        <Image
        style={{width:200, height:200}}
        source={{uri: route.params.url}}
        />     
        </View>
    <View style={styles.detalle}>
        <View style={styles.datosDetalle}>
        <Text>{route.params.descripcion}</Text>
        </View>
        <View style={styles.botones}>
        <Button label={'$30'}></Button>
        <Button label={'Order Now'} onPress={orderFun}></Button>
        </View>
    </View>
    </View>
  )
};

export default Dettalle;