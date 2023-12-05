import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';
import makeStyles from './styles';

interface Size {
  width: number;
  height: number;
}

export const carouselSize: Size = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width / 1.2,
};

const SLIDES_DATA: string[] = [
  'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043',
  'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://www.shutterstock.com/image-photo/varna-bulgaria-february-022017-image-260nw-653906245.jpg',
];

function CustomCarousel(): JSX.Element {
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
        renderItem={({item}) => (
          <Image
            source={{
              uri: item,
            }}
            style={styles.caroImg}
          />
        )}
      />

      <View style={[styles.row, styles.justifyCenter, styles.my5]}>
        {SLIDES_DATA.map((slide, index) => (
          <React.Fragment key={index}>
            <Ionicons
              name={
                activeIndex === index ? 'radio-button-on' : 'radio-button-off'
              }
              size={12}
              color={activeIndex === index ? colors.primary : '#ccc'}
              onPress={() => setActiveIndex(index)}
            />
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

export default CustomCarousel;
