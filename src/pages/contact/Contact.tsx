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
        <Heading>Get in contact</Heading>
        <Formik onSubmit={handleSubmit} initialValues={{ name: '', email: '', message: '' }}>
          <Form>
            <Stack
              gap={'4'}
              mt={'4'}
              w={'500px'}
              bgColor={'pear'}
              color={'eerie'}
              p={'4'}
              rounded={'xl'}
            >
              <TextInput name={'name'} label={'Name'} />
              <TextInput name={'email'} label={'Email'} />
              <TextInput name={'message'} label={'Message'} isTextArea />
              <Button type={'submit'}>Submit</Button>
            </Stack>
          </Form>
        </Formik>
      </Center>
    </PageWrapper>
  );
};
