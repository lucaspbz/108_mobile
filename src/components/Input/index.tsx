import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Label, Picker, TextInput } from './styles';

interface IData {
  name: string;
  id: string;
}

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  isPicker?: boolean;
  isLoading?: boolean;
  data?: IData[];
}

interface InputValueReference {
  value: string | number;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, label, isPicker = false, isLoading, data, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { fieldName, defaultValue = '', error, registerField } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <Label>{label}:</Label>
      {!isPicker && (
        <TextInput
          isErrored={!!error}
          ref={inputElementRef}
          defaultValue={defaultValue}
          {...rest}
          onChangeText={value => (inputValueRef.current.value = value)}
        />
      )}
      {isPicker && (
        <Picker
          ref={inputElementRef}
          prompt="Selecione uma opção"
          selectedValue={selectedCountry}
          onValueChange={value => (inputValueRef.current.value = value)}
        >
          {!isLoading &&
            data?.map(({ name, id }) => (
              <Picker.Item key={id} label={name} value={id} />
            ))}
        </Picker>
      )}
    </Container>
  );
};

export default forwardRef(Input);
