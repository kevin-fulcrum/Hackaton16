import React from 'react'
import {Text, StyleSheet,View,Image} from 'react-native'
import {windowWidth,windowHeight} from '../componet/Dimensions'
import Button from '../componet/button/Button'

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

const Dettalle=({navigation})=>{
  return(
    <View style={styles.container}>
        <View style={styles.image}>
        <Image
        style={{width:200, height:200}}
        source={{uri: 'https://cdn.icon-icons.com/icons2/692/PNG/512/seo-social-web-network-internet_340_icon-icons.com_61497.png',}}
        />     
        </View>
    <View style={styles.detalle}>
        <View style={styles.datosDetalle}>
        <Text>hola</Text>
        </View>
        <View style={styles.botones}>
        <Button label={'$30'}></Button>
        <Button label={'Order Now'} onPress={()=>{navigation.navigate('Cart')}}></Button>
        </View>
    </View>
    </View>
  )
};

export default Dettalle;