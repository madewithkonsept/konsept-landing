import { Navbar } from '@/components';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Home } from '@/pages';
import { Line } from '@/pages/line/Line';
import { Services } from '@/pages/services/Services';
import { TheProblem } from '@/pages/theProblem/TheProblem';
import { Flex } from '@chakra-ui/react';

export const MainApp = () => {
  const activeSection = useActiveSection(['home', 'us']); // add more ids

  return (
    <>
      <Flex
        flexDirection={'column'}
        w={'full'}
        pr={'50px'}
        overflow={'hidden'}
        position={'relative'}
      >
        <Home />
        <TheProblem />
        <Line />
        <Services />
      </Flex>
      <Navbar activeSection={activeSection} />
    </>
  );
};
