import {View, Text} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar, Divider, useTheme, withTheme} from 'react-native-paper';
import AppTopBar from './AppTopBar';
import ProductCarousel from './ProductCarousel';
import makeStyles from './styles';

const ProductView = withTheme(() => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  return (
    <View>
      <AppTopBar />

      <ProductCarousel />

      <View style={styles.productItemContainer}>
        <View style={[styles.row, styles.justifyBetween]}>
          <View style={styles.productTitleContainer}>
            <Text style={styles.itemName}>Clean hand-bag for simple walk.</Text>
            <View style={[styles.row, styles.alignCenter]}>
              <Text style={styles.price}>N200,000</Text>
              <Text style={styles.views}>( 234 Views )</Text>
            </View>
            <Text>2hrs ago</Text>
          </View>
          <View style={styles.my10}>
            <IonIcons name="bookmark-outline" size={26} color={colors.black} />
          </View>
        </View>

        <Divider />

        <View style={[styles.row, styles.py10, styles.alignCenter]}>
          <Avatar.Image
            size={40}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/31075233?v=4',
            }}
            style={styles.mr10}
          />
          <View style={styles.col}>
            <View style={styles.row}>
              <Text style={styles.username}>@username</Text>
              <MaterialIcons name="verified" color={colors.primary} size={20} />
            </View>
            <Text>Federal university of technology, minna</Text>
          </View>
        </View>

        <Divider />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          soluta fuga, alias sit iste neque! Modi totam unde alias, nesciunt,
          exercitationem at itaque atque aperiam possimus consequuntur minima
          blanditiis amet voluptates, earum corrupti dolorum ad iste iure ullam
          similique deserunt omnis repudiandae. Possimus molestiae ea vel
          repudiandae provident unde tempore dignissimos saepe.
        </Text>
      </View>
    </View>
  );
});

export default ProductView;
