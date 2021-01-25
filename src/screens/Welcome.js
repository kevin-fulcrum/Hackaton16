import React from 'react'
import { View, Dimensions, FlatList, Animated, Text } from 'react-native'
import ProductSliderItem from '../componet/products/ProductSliderItem'
import {Data} from '../resourse/Data'
import {DataPopular} from '../resourse/DataPopular'
import { useSelector } from 'react-redux'

const scrollX = new Animated.Value(0);
const onPress = () => {
    navigation.navigate('Detalle')
};

const { width, height } = Dimensions.get('window')
const Welcome = ({navigation}) => {
  const carData = useSelector((state)=>state.ProductReducer);
  console.warn(carData);
    return(
        <View style={{flex: 1}}>
            <View style={{ marginLeft:20 , marginTop: 50}}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>Best Coffe in Town</Text>
            </View>
            <View style={{flex: 0.5}}>
                <FlatList
                data={Data}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => {
                    return <ProductSliderItem item={item.item} onPress={()=>{navigation.navigate('Detalle', item.item)}}/>;
                }}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                />
            </View>
            <View style={{ marginLeft:20}}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>Most Popular</Text>
            </View>
            <View style={{flex: 0.5}}>
                <FlatList
                data={carData.products}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => {
                    return <ProductSliderItem item={item.item} onPress={()=>{navigation.navigate('Detalle')}}/>;
                }}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                />
            </View>            
        </View>
    )
}
export default Welcome