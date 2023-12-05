import {StyleSheet} from 'react-native';
import {carouselSize} from './ProductCarousel';

const appFont = {
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
};

const makeStyles = colors =>
  StyleSheet.create({
    productItemContainer: {
      marginHorizontal: 10,
    },
    itemName: {
      fontSize: appFont.md,
      fontWeight: 'bold',
    },
    price: {
      fontWeight: 'bold',
      fontSize: appFont.lg,
      marginRight: 5,
      color: colors.black,
      marginVertical: 5,
    },
    views: {
      fontSize: appFont.sm,
    },
    productTitleContainer: {
      paddingVertical: 10,
    },
    username: {
      marginRight: 5,
      color: colors.black,
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
      color: colors.black,
      lineHeight: 20,
    },
    caroImg: {
      width: carouselSize.width,
      height: carouselSize.height,
      resizeMode: 'cover',
    },

    mr5: {
      marginRight: 5,
    },
    mr10: {
      marginRight: 10,
    },
    py10: {
      paddingVertical: 10,
    },
    my5: {
      marginVertical: 5,
    },
    my10: {
      marginVertical: 10,
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
  });

export default makeStyles;
