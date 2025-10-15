import { createSystem, defaultConfig } from '@chakra-ui/react';
import { defineAnimationStyles } from '@chakra-ui/react';

const animationStyles = defineAnimationStyles({
  fadeScaleOut: {
    value: {
      animationName: 'fadeScaleOut',
      animationDuration: '1s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-out',
    },
  },
  fadeIn: {
    value: {
      animationName: 'fadeIn',
      animationDuration: '0.3s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
    },
  },
});

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'DM Sans Variable', sans-serif` },
        body: { value: `'DM Sans Variable', sans-serif` },
        monospace: { value: `'UnifontEX', monospace` },
      },
      colors: {
        eerie: { value: '#181818' }, // background
        brandeis: { value: '#0367fc' }, // accent 1
        pear: { value: '#BFFF00' }, // accent 2

        // green: { value: '#c5eb0a' }, // your “pear” color
        alabaster: { value: '#181818' }, // main text
        whitePure: { value: '#ffffff' }, // fallback / maybe border highlights
      },
    },
    animationStyles,
  },
});
