import {StyleSheet} from 'react-native';
import {carouselSize} from './ProductCarousel';

const appFont = {
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
};

const styles = StyleSheet.create({
  productItemContainer: {
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  itemName: {
    fontSize: appFont.md,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: appFont.lg,
    marginRight: 5,
    color: 'black',
    marginVertical: 5,
  },
  views: {
    fontSize: appFont.sm,
  },
  productTitleContainer: {
    paddingVertical: 10,
  },
  mr5: {
    marginRight: 5,
  },
  py10: {
    paddingVertical: 10,
  },
  username: {
    marginRight: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: appFont.lg,
  },
  descriptionContainer: {
    padding: 10,
  },
  descriptionTitle: {
    fontSize: appFont.xl,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionBody: {
    fontSize: appFont.md,
    color: 'black',
    lineHeight: 20,

    // letterSpacing: 1
  },
  caroImg: {
    width: carouselSize.width,
    height: carouselSize.height,
    resizeMode: 'cover',
  },
});

export default styles;
