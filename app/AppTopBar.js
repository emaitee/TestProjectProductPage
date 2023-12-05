import * as React from 'react';
import {Appbar} from 'react-native-paper';

const AppTopBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Product details" />

    <Appbar.Action icon="dots-vertical" onPress={() => {}} />
  </Appbar.Header>
);

export default AppTopBar;
