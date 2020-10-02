import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Label, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, label, ...rest },
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
      <TextInput
        isErrored={!!error}
        ref={inputElementRef}
        defaultValue={defaultValue}
        {...rest}
        onChangeText={value => (inputValueRef.current.value = value)}
      />
    </Container>
  );
};

export default forwardRef(Input);
