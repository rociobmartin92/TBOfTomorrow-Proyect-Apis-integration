import React from 'react';
import {config, GluestackUIProvider} from '@gluestack-ui/themed';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config.theme}>
      <Home />
    </GluestackUIProvider>
  );
}

export default App;
