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
    backgroundColor: '#5fa3b5',
    height: height/3.5,
    borderRadius: 10,
    flexDirection: 'column',
    marginTop:80,
    margin: 20
    
  },
  cont1:{
    marginBottom:-80,
  },
  image: {
    width: width / 2,
    height: height/3.2,
    borderRadius: 10,
    marginLeft:50
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#e4eff3'
  },
  itemPrice: {
    color: '#e4eff3',
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 20
  },
});

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.cont1}></View>
        <Image
          style={styles.image}
          source={{
            uri: item.url,
          }}
        />
        <Text style={styles.itemTitle}>{item.descripcion}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default ProductSliderItem;
