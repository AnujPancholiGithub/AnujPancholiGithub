import React from 'react';
import Home from './components/Home';
import Test from './components/Test';
import BackGroundComponent from './components/BackGroundComponent';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import FontTheme from './Fonts/FontTheme';

function App() {

  const customTheme = extendTheme(FontTheme);

  return (
    <>
      <ChakraProvider theme={customTheme}>
        <BackGroundComponent />
      </ChakraProvider>
    </>
  );
}

export default App;
