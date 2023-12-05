import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CaroImg from './caro-img.jpeg';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const carouselSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width / 1.5,
};

const SLIDES_DATA = [
  {
    id: 1,
    url: CaroImg,
  },
  {
    id: 2,
    url: CaroImg,
  },
  {
    id: 3,
    url: CaroImg,
  },
  {
    id: 4,
    url: CaroImg,
  },
];

export default props => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View>
      <Carousel
        loop
        width={carouselSize.width}
        height={carouselSize.height}
        autoPlay={true}
        data={SLIDES_DATA}
        scrollAnimationDuration={1500}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={item => <Image source={CaroImg} style={styles.caroImg} />}
      />

      <View style={[styles.row, styles.justifyCenter]}>
        {SLIDES_DATA.map((slide, index) => (
          <Ionicons
            key={slide.id}
            name={
              activeIndex === index ? 'radio-button-on' : 'radio-button-off'
            }
            size={18}
            color={activeIndex === index ? '#007bff' : '#ccc'}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};
