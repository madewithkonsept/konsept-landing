import { useField } from 'formik';
import { Input, Text, Field as ChakraField } from '@chakra-ui/react';
import type { InputProps, TextareaProps } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';

type CustomTextareaProps = {
  label: string;
  isTextArea: true;
} & TextareaProps;

export type TextInputType = {
  label: string;
  isTextArea?: false;
} & InputProps;

export const TextInput = (props: TextInputType | CustomTextareaProps) => {
  const { name, required = false, label, isTextArea = false, borderColor = 'eerie' } = props;
  const [field, meta] = useField(name);
  const { error, touched } = meta;

  return (
    <ChakraField.Root gap={'1'} colorPalette={'white'} required={required}>
      <ChakraField.Label fontWeight={'bold'} fontFamily={'body'}>
        {label}
      </ChakraField.Label>
      {isTextArea ? (
        <Textarea
          {...field}
          w={'full'}
          rounded={'md'}
          borderWidth={'medium'}
          borderColor={error ? 'red.500' : borderColor}
          _focusVisible={{
            borderColor: error ? 'red.500' : 'eerieLight',
          }}
          _focus={{
            borderColor: error ? 'red.500' : 'eerieLight',
          }}
          _active={{
            borderColor: error ? 'red.500' : 'eerieLight',
          }}
          {...(props as TextareaProps)}
        />
      ) : (
        <Input
          {...field}
          w={'full'}
          rounded={'md'}
          borderWidth={'medium'}
          borderColor={error ? 'red.500' : borderColor}
          _focus={{
            borderColor: error ? 'red.500' : 'eerieLight',
          }}
          _active={{
            borderColor: error ? 'red.500' : 'eerieLight',
          }}
          _focusVisible={{
            borderColor: error ? 'red.500' : 'eerieLight',
          }}
          {...(props as InputProps)}
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
