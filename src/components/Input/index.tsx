import React, { useEffect, useRef } from 'react';
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

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const { fieldName, defaultValue = '', error, registerField } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

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
        ref={inputValueRef}
        defaultValue={defaultValue}
        {...rest}
        onChangeText={(value) => (inputValueRef.current.value = value)}
      />
    </Container>
  );
};

export default Input;
