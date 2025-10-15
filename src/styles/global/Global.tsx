import { Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={{
        'html, body, #root': {
          height: '100%',
          color: 'white', // alabaster
          backgroundColor: '#181818', // eerie
          margin: '0',
          padding: '0',
          overflow: 'auto' /* important don't change auto base code depends on it */,
          // scrollSnapType: 'y mandatory',
        },
        '@keyframes fadeScaleOut': {
          '0%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '100%': {
            opacity: 0,
            transform: 'scale(0.8)',
          },
        },
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        '@keyframes breath': {
          '0%': {
            opacity: 0.6,
            // transform: 'scale(0.95)',
          },
          '50%': {
            opacity: 1,
            // transform: 'scale(1.05)',
          },
          '100%': {
            opacity: 0.6,
            // transform: 'scale(0.95)',
          },
        },
        '@keyframes rotateInfinite': {
          '0%': {
            // opacity: 0.6,
            transform: 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          },
          '50%': {
            // opacity: 1,/
            transform: 'rotateY(180deg)',
            transformStyle: 'preserve-3d',
          },
          '100%': {
            // opacity: 0.6,
            transform: 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          },
        },
        '@keyframes bounce': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        '@keyframes spinInfinite': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
    />
  );
};

export default GlobalStyles;
