import { Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.jpg';

type NavbarProps = {
  activeSection: string;
};
export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navigate = useNavigate();

  const renderNabarButtons = () => {
    return views.map((view, index) => {
      const isActive = activeSection === view.name;
      return (
        <Button
          key={index}
          color={isActive ? 'eerie' : 'white'}
          backgroundColor={isActive ? 'white' : 'eerie'}
          size={'xs'}
          w={'100%'}
          h={'100%'}
          flex={1}
          p={'0'}
          py={'2'}
          fontSize={'2xl'}
          variant={'plain'}
          fontWeight={'bold'}
          onClick={() => navigate(view.path)}
          textDecoration={'underline'}
          fontFamily={'monospace'}
          writingMode={'vertical-lr'}
          _hover={{
            color: 'eerie',
            backgroundColor: 'pear',
          }}
        >
          {view.name}
        </Button>
      );
    });
  };
  return (
    <>
      <VStack
        backgroundColor={'pear'}
        // w={'50px'}
        h={'100dvh'}
        position={'absolute'}
        right={'0%'}
        p={'2'}
        top={'50%'}
        transform={'translate(0%,-50%)'}
        zIndex={'1000'}
      >
        {renderNabarButtons()}
      </VStack>
    </>
  );
};

const views = [
  { name: 'home', path: '' },
  { name: 'us', path: 'about' },
  { name: 'projects', path: 'info' },
  { name: 'contact', path: 'contact' },
];
