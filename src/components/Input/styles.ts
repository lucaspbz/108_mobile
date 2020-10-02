import styled, { css } from 'styled-components/native';
import { Picker as ReactPicker } from '@react-native-community/picker';

interface TextInputProps {
  isErrored: boolean;
}

export const Container = styled.View`
  margin-bottom: 24px;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`;

export const Label = styled.Text`
  width: 100%;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(51, 51, 51, 0.2);
  flex: 1;
  margin: 8px 16px;
  width: 100%;
  height: 32px;

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
      border-bottom-color: #c53030;
    `};
`;

export const Picker = styled(ReactPicker)`
  width: '80%';
`;
