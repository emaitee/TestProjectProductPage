import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CaroImg from './caro-img.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';
import makeStyles from './styles';

export const carouselSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width / 1.2,
};

const SLIDES_DATA = Array(4)
  .fill('')
  .map((a, i) => a + i);

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {colors} = useTheme();
  const styles = makeStyles(colors);
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
        renderItem={() => <Image source={CaroImg} style={styles.caroImg} />}
      />

      <View style={[styles.row, styles.justifyCenter, styles.my5]}>
        {SLIDES_DATA.map((slide, index) => (
          <Ionicons
            key={slide}
            name={
              activeIndex === index ? 'radio-button-on' : 'radio-button-off'
            }
            size={12}
            color={activeIndex === index ? colors.primary : '#ccc'}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};
