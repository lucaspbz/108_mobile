import React, { ReactText } from 'react';
import { Modal } from 'react-native';

import { Container, Picker, Label } from './styles';

interface PickerProps {
  options: {
    value: number;
    label: string;
  }[];
  selectedValue: string | number;
  onValueChange(data: ReactText): void;
  label: string;
  enabled?: boolean;
}

const Select: React.FC<PickerProps> = ({
  options,
  selectedValue,
  onValueChange,
  label,
  enabled = true,
}) => {
  return (
    <Container>
      <Label>{label}</Label>

      {/* <Modal visible={false}> */}
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        enabled={enabled}
      >
        {options.map(option => (
          <Picker.Item
            value={option.value}
            label={option.label}
            key={option.value}
          />
        ))}
      </Picker>
      {/* </Modal> */}
    </Container>
  );
};

export default Select;
