import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ProductSliderItem = ({item, onPress}) => {
  console.warn(item.url)
  const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: width / 2,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#212121',
    fontSize: 13,
    fontWeight: '300',
  },
});

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </TouchableOpacity>
        <Text style={styles.itemTitle}>{item.descripcion}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );
};

export default ProductSliderItem;
