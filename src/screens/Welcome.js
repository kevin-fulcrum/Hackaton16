import React from 'react'
import { View, Dimensions, FlatList, Animated } from 'react-native'
import ProductSliderItem from '../componet/products/ProductSliderItem'
import {Data} from '../resourse/Data'

const scrollX = new Animated.Value(0);
const onPress = () => {

};

const { width, height } = Dimensions.get('window')
const Welcome = () => {
    return(
        <View style={{flex: 1}}>
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
                return <ProductSliderItem item={item.item} onPress={onPress} />;
            }}
            onScroll={Animated.event([
                {nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
            )}
            />
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
                return <ProductSliderItem item={item.item} onPress={onPress}/>;
            }}
            onScroll={Animated.event([
                {nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
            )}
            />
        </View>
    )
}
export default Welcome