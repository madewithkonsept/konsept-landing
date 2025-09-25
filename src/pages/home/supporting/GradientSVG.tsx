import { Box } from '@chakra-ui/react';
import './styles.css';
import { useEffect, useRef } from 'react';

export const GradientSVG = ({
  shouldMove,
  gradientRef,
}: {
  shouldMove: boolean;
  gradientRef: React.RefObject<HTMLDivElement | null>;
}) =>
  useEffect(() => {
    const moveGradient = (event: MouseEvent) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (gradientRef?.current && shouldMove) {
        gradientRef?.current.style.setProperty('--my-mouse-x', mouseX.toString() + '%');
        gradientRef?.current.style.setProperty('--my-mouse-y', mouseY.toString() + '%');
      }
    };
    document.addEventListener('mousemove', moveGradient);
    return () => {
      document.removeEventListener('mousemove', moveGradient);
    };
  }, [gradientRef, shouldMove]);
