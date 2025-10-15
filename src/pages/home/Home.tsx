import { PageWrapper } from '@/components';
import { Image, Stack } from '@chakra-ui/react';
import { Arrows, BounceButton, TopRightThing } from './supporting/BouncinButton';
import logo from '../../assets/logo-horizontal-inverted.png';
import graph from '../../assets/graph.png';

export const Home = () => {
  return (
    <>
      <PageWrapper id={'home'}>
        <Stack
          position={'relative'}
          flexGrow={'0'}
          w={'full'}
          h={'100dvh'}
          justifyContent={'center'}
          alignItems={'center'}
          pl={'5'}
          pt={'10'}
        >
          <TopRightThing />
          <Image src={logo} h={'200px'} w={'fit-content'} />
          <Image
            position={'absolute'}
            bottom={'0'}
            right={'0'}
            transform={'translate(0%,0%)'}
            src={graph}
            h={'700px'}
            w={'fit-content'}
            zIndex={'-1'}
            animation={'spinInfinite 200s ease-in-out infinite'}
          />
          {/* 
          >
            REGIONAL
            <br />
            <span
              style={{
                textAlign: 'center',
                width: '100%',
                color: 'transparent',
                WebkitTextStroke: '2px white',
                letterSpacing: '1',
              }}
            >
              SOFTWARE
            </span>
            <br />
          </Text>
          
          <Text
          mt={'5'}
          fontSize={'4xl'}
          fontFamily={'michroma'}
          fontWeight={'bold'}
          color={'pear'}
          textAlign={'center'}
          // animation={'rotateInfinite 5s ease-in-out infinite'}
          >
            Your business deserves to be seen
            </Text> */}
          <Arrows />
          <BounceButton />
        </Stack>
      </PageWrapper>
    </>
  );
};
