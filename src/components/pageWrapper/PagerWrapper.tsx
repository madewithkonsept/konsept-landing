import { Center } from '@chakra-ui/react';
import React from 'react';

export type PageWrapperProps = {
  children: React.ReactNode;
  id?: string;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, id }) => {
  return (
    <Center
      id={id}
      w={'full'}
      minH={'100dvh'}
      flex={'1'}
      overflow={'hidden'}
      flexDir={'column'}
      animationStyle={'fadeIn'}
    >
      {children}
    </Center>
  );
};
