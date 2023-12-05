import React from 'react';
import ProductView from './app/ProductView';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ProductView />
    </SafeAreaProvider>
  );
}

export default App;
