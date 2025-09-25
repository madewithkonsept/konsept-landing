import { VStack, Text, chakra, HStack } from '@chakra-ui/react';
export function BounceButton() {
  return (
    <VStack
      gap={1}
      position={'absolute'}
      bottom={'130px'} // distance from the bottom
      left={'15px'}
      //   transform="translateX(-50%)" // center horizontally
    >
      <Text
        fontFamily={'monospace'}
        fontSize={'70px'}
        fontWeight={'bolder'}
        color={'pear'}
        animation={'breath 2s ease-in-out infinite'}
        writingMode={'vertical-lr'}
        textOrientation={'upright'}
        letterSpacing={'15px'}
        // lineHeightStep={'-10'}
        // text
      >
        {'SCROLL'}
      </Text>
    </VStack>
  );
}

export function TopRightThing() {
  return (
    <VStack
      gap={1}
      position={'absolute'}
      top={'10px'} // distance from the bottom
      right={'20px'}
      perspective={'800px'}
      animation={'rotateInfinite 5s ease-in-out infinite'}

      //   transform="translateX(-50%)" // center horizontally
    >
      <Text fontFamily={'monospace'} fontSize={'2xl'} fontWeight={'bolder'} color={'brandeis'}>
        {'PZ, 2025'}
      </Text>
    </VStack>
  );
}

export const Arrows = () => {
  const Arrow = chakra('svg');
  return (
    <HStack
      gap={1}
      position={'absolute'}
      color={'brandeis'}
      bottom={'-20px'} // distance from the bottom
      left={'10px'}
      //   transform="translateX(-50%)" // center horizontally
    >
      <Arrow
        transform={'rotate(-45deg)'}
        fill={'black'} // controls the fill color
        stroke={'pear'} // optional, if you want stroke
        strokeWidth={'1px'} // optional
        // viewBox="0 0 78 97.5"
        // w={'160px'}
        // h={'160px'}
        boxSize={'160px'}
        viewBox={'0 0 100 100'}
      >
        <g transform={'scale(1)'}>
          <path
            d={
              'M24,48c0-10,0-20,0-30h-6c0,14,0,28,0,42c14,0,28,0,42,0v-6c-10,0-20,0-30,0v-6H24L24,48z'
            }
          />
          <polygon points={'60,18 54,18 54,24 60,24'} />
          <polygon points={'54,24 48,24 48,30 54,30'} />
          <polygon points={'42,36 36,36 36,42 42,42'} />
          <polygon points={'48,30 42,30 42,36 48,36'} />
          <polygon points={'36,42 30,42 30,48 36,48'} />
        </g>
      </Arrow>
      {/* <Arrow
        fill="white" // controls the fill color
        // stroke="brandeis" // optional, if you want stroke
        strokeWidth="1px" // optional
        // viewBox="0 0 78 97.5"
        // w={'160px'}
        // h={'160px'}
        boxSize={'160px'}
        transform="rotate(-45deg)"
        viewBox="0 0 100 100"
      >
        <g transform="scale(1.5)">
          <path d="M24,48c0-10,0-20,0-30h-6c0,14,0,28,0,42c14,0,28,0,42,0v-6c-10,0-20,0-30,0v-6H24L24,48z" />
          <polygon points="60,18 54,18 54,24 60,24" />
          <polygon points="54,24 48,24 48,30 54,30" />
          <polygon points="42,36 36,36 36,42 42,42" />
          <polygon points="48,30 42,30 42,36 48,36" />
          <polygon points="36,42 30,42 30,48 36,48" />
        </g>
      </Arrow>

      <Arrow
        transform="rotate(-45deg)"
        fill="black" // controls the fill color
        stroke="pear" // optional, if you want stroke
        strokeWidth="1px" // optional
        // viewBox="0 0 78 97.5"
        // w={'160px'}
        // h={'160px'}
        boxSize={'160px'}
        viewBox="0 0 100 100"
      >
        <g transform="scale(1.5)">
          <path d="M24,48c0-10,0-20,0-30h-6c0,14,0,28,0,42c14,0,28,0,42,0v-6c-10,0-20,0-30,0v-6H24L24,48z" />
          <polygon points="60,18 54,18 54,24 60,24" />
          <polygon points="54,24 48,24 48,30 54,30" />
          <polygon points="42,36 36,36 36,42 42,42" />
          <polygon points="48,30 42,30 42,36 48,36" />
          <polygon points="36,42 30,42 30,48 36,48" />
        </g>
      </Arrow>
      <Arrow
        fill="white" // controls the fill color
        // stroke="white" // optional, if you want stroke
        strokeWidth="1px" // optional
        // viewBox="0 0 78 97.5"
        // w={'160px'}
        // h={'160px'}
        boxSize={'160px'}
        transform="rotate(-45deg)"
        viewBox="0 0 100 100"
      >
        <g transform="scale(1.5)">
          <path d="M24,48c0-10,0-20,0-30h-6c0,14,0,28,0,42c14,0,28,0,42,0v-6c-10,0-20,0-30,0v-6H24L24,48z" />
          <polygon points="60,18 54,18 54,24 60,24" />
          <polygon points="54,24 48,24 48,30 54,30" />
          <polygon points="42,36 36,36 36,42 42,42" />
          <polygon points="48,30 42,30 42,36 48,36" />
          <polygon points="36,42 30,42 30,48 36,48" />
        </g>
      </Arrow> */}
    </HStack>
  );
};
