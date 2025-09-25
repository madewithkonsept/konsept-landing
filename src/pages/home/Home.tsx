import { PageWrapper } from '@/components';
import { Image, Stack, Text } from '@chakra-ui/react';
import { Arrows, BounceButton, TopRightThing } from './supporting/BouncinButton';
import { TheProblem } from '../theProblem/TheProblem';
import logo from '../../assets/logo-horizontal-inverted.svg';

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
          <Image src={logo} h={'250px'} w={'fit-content'} />
          {/* <Text
            fontSize={'250px'}
            fontFamily={'michroma'}
            fontWeight={'bold'}
            w={'full'}
            textAlign={'center'}
            lineHeight={'0.45'}
            letterSpacing={'widest'}
            transition={'all 0.5s ease-in-out'}
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
