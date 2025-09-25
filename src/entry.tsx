import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Text } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { system, GlobalStyles } from '@/styles';
import { MainApp } from '@/layouts';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@fontsource/unifontex';
import '@fontsource/climate-crisis';
import '@fontsource/ultra';
import '@fontsource-variable/host-grotesk';

const root = document.getElementById('root');

createRoot(root!).render(
  <BrowserRouter>
    <ChakraProvider value={system}>
      <StrictMode>
        {/* initialize custom styles */}
        <GlobalStyles />
        {/* app routing architecture */}
        <Routes>
          <Route path={'/'} element={<MainApp />} />
          <Route path={'*'} element={<Text>404</Text>} />
        </Routes>
      </StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);
