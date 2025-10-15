import { useField } from 'formik';
import { Input, Text, Field as ChakraField } from '@chakra-ui/react';
import type { InputProps } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';

export type TextInputType = {
  label: string;
  isTextArea?: boolean;
} & InputProps;

export const TextInput = (props: TextInputType) => {
  const { name, required = false, label, isTextArea = false } = props;
  const [field, meta] = useField(name);
  const { error, touched } = meta;

  return (
    <ChakraField.Root gap={'1'} colorPalette={'white'} required={required}>
      <ChakraField.Label fontWeight={'bold'} fontFamily={'body'}>
        {label}
      </ChakraField.Label>
      {isTextArea ? (
        <Textarea />
      ) : (
        <Input
          {...props}
          {...field}
          w={'full'}
          borderWidth={'thin'}
          borderColor={error ? 'red.500' : 'gray.300'}
        />
      )}
      {error && touched && (
        <Text fontSize={'md'} color={'red.500'}>
          {error}
        </Text>
      )}
    </ChakraField.Root>
  );
};
