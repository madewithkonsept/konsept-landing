import { PageWrapper } from '@/components';
import { TextInput } from '@/components/form/TextInput';
import { Button, Center, Heading, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};
export const Contact = () => {
  const handleSubmit = (values: ContactFormValues) => {
    console.log(values);
  };

  return (
    <PageWrapper id={'contact'}>
      <Center w={'full'} h={'100dvh'} flexDir={'column'}>
        <Heading
          fontSize={'4xl'}
          fontWeight={'bold'}
          fontFamily={'heading'}
          textAlign={'center'}
          as={'h2'}
        >
          GET IN TOUCH
        </Heading>
        <Formik onSubmit={handleSubmit} initialValues={{ name: '', email: '', message: '' }}>
          <Form>
            <Stack
              gap={'4'}
              mt={'8'}
              w={'500px'}
              bgColor={'pear'}
              color={'eerie'}
              p={'8'}
              rounded={'xl'}
            >
              <TextInput
                name={'name'}
                label={'Name'}
                bgColor={'white'}
                color={'eerie'}
                borderColor={'eerie'}
              />
              <TextInput
                name={'email'}
                label={'Email'}
                bgColor={'white'}
                color={'eerie'}
                borderColor={'eerie'}
              />
              <TextInput
                isTextArea
                name={'message'}
                label={'Message'}
                bgColor={'white'}
                color={'eerie'}
                borderColor={'eerie'}
              />
              <Button type={'submit'} variant={'solid'} size={'lg'}>
                SEND MESSAGE
              </Button>
            </Stack>
          </Form>
        </Formik>
      </Center>
    </PageWrapper>
  );
};
