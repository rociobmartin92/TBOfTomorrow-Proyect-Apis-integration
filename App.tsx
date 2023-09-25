import React from 'react';
import {config, GluestackUIProvider} from '@gluestack-ui/themed';
import RootNav from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config.theme}>
        <RootNav />
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

export default App;
