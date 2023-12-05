import * as React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import makeStyles from './styles';

function AppTopBar(): JSX.Element {
  const {colors} = useTheme();
  const styles = makeStyles(colors);
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content titleStyle={styles.headerTitle} title="Product details" />

      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
}

export default AppTopBar;
