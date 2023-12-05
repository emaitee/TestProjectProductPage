import {StyleSheet} from 'react-native';
import {carouselSize} from './ProductCarousel';

interface AppFont {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

const appFont: AppFont = {
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
};

const makeStyles = (colors: any) =>
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
      color: colors.secondary,
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
      color: colors.secondary,
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
      color: colors.secondary,
      lineHeight: 20,
    },
    caroImg: {
      width: carouselSize.width,
      height: carouselSize.height,
      resizeMode: 'cover',
    },
    headerTitle: {
      fontSize: appFont.xl,
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
