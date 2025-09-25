import { PageWrapper } from '@/components';
import { Center, VStack, Image, Stack, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { GradientSVG } from '../home/supporting/GradientSVG';
import '../home/supporting/styles.css';
import background from '../../assets/background.jpg';

export const TheProblem = () => {
  return (
    <PageWrapper id={'us'}>
      <Stack
        as={'section'}
        zIndex={'2'}
        flexGrow={'1'}
        w={'full'}
        minH={'100dvh'}
        background={'transparent'}
        position={'relative'}
      >
        <Image
          src={background}
          position={'absolute'}
          zIndex={'-1'}
          w={'full'}
          h={'full'}
          aspectRatio={'landscape'}
          objectFit={'cover'}
          top={'0'}
          left={'0'}
          filter="blur(25px)" // adjust blur
          // animation={'rotateInfinite 2s ease-in-out infinite'}
          style={{
            maskImage:
              'linear-gradient(to top, black 0%, transparent 100%, transparent 0%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(to top, black 0%, transparent 100%, transparent 0%, black 100%)',
          }}
        />
        <Stack w={'full'} gap={'10'} py={'60px'}>
          {cards.map((item, index) => {
            return (
              <HorizontalCard
                key={`horizontal-card-${index}`}
                hint={item.hint}
                reply={item.reply}
                align={item.align}
                color={item.color}
              />
            );
          })}
        </Stack>
      </Stack>
    </PageWrapper>
  );
};

const HorizontalCard = ({
  hint,
  reply,
  align,
  color,
}: {
  hint: string;
  reply: string;
  align: 'start' | 'end';
  color: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  const gradientRef = useRef<HTMLDivElement>(null);
  GradientSVG({ shouldMove: isHover, gradientRef });

  return (
    <VStack
      ref={gradientRef}
      w={'full'}
      // h={'25%'}
      // className="gradient"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      justifyContent={align}
      alignItems={align}
      px={'56'}
      // borderBottom={'2px solid #F5F5F5'}
      // _hover={{
      //   bg: 'white', // change color on hover

      //   color: 'eerie',
      // }}

      //   borderBottom={'none'}
    >
      <Center flexDir={'column'} h={'500px'} w={'500px'} rounded={'2xl'} bgColor={color} px={'10'}>
        <Center w={'full'} h={'full'} alignItems={'end'}>
          <Text fontSize={'2xl'} w={'full'} pl={'10'} fontWeight={'bold'} color={'eerie'}>
            {hint.toUpperCase()}
          </Text>
        </Center>

        <Center w={'full'} h={'full'} alignItems={'start'}>
          {isHover && (
            <Text
              fontSize={'xl'}
              w={'full'}
              pl={'10'}
              // fontStyle={'italic'}
              color={'eerie'}
              animation={'fadeIn 0.3s'}
              fontFamily={'monospace'}
            >
              {reply}
            </Text>
          )}
        </Center>
      </Center>
    </VStack>
  );
};
const cards = [
  {
    hint: 'Already on Facebook? — Great start',
    reply: 'Let’s make sure your customers can find you everywhere.',
    align: 'start',
    color: 'white',
  },
  {
    hint: 'Someone already “helped” with your site?',
    reply: 'Pretty at first… now it probably barely works. We can fix it (or make it better).',
    align: 'end',
    color: 'pear',
  },
  {
    hint: 'Planning to update your website?',
    reply: 'We’ll help you get it done without delays or headaches.',
    align: 'start',
    color: 'white',
  },
  {
    hint: 'Your business is online, but…',
    reply: 'Let’s make it easy for people to actually find you.',
    align: 'end',
    color: 'pear',
  },
];
