import React from 'react';
import {config, GluestackUIProvider} from '@gluestack-ui/themed';
import RootNav from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <GluestackUIProvider config={config.theme}>
          <RootNav />
        </GluestackUIProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
