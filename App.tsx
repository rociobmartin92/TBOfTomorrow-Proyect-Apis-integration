import 'react-native-gesture-handler';
import React from 'react';
import {config, GluestackUIProvider} from '@gluestack-ui/themed';
import RootNav from './src/navigation/RootNav';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import DrawerNav from './src/navigation/DrawerNav';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <GluestackUIProvider config={config.theme}>
          <DrawerNav />
        </GluestackUIProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
