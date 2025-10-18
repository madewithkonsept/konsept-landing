// import { Navbar } from '@/components';
// import { useActiveSection } from '@/hooks/useActiveSection';
import { Contact, Home } from '@/pages';
import { Line } from '@/pages/line/Line';
import { Services } from '@/pages/services/Services';
import { Flex } from '@chakra-ui/react';

export const MainApp = () => {
  // const activeSection = useActiveSection(['home', 'us']); // add more ids

  return (
    <>
      <Flex
        flexDirection={'column'}
        w={'full'}
        // pr={'50px'}
        overflow={'hidden'}
        position={'relative'}
      >
        <Home />
        {/* <TheProb/lem /> */}
        <Services />
        <Line />
        <Contact />
      </Flex>
      {/* <Navbar activeSection={activeSection} /> */}
    </>
  );
};
