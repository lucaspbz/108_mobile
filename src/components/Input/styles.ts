import styled, { css } from 'styled-components/native';

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
  max-width: 80px;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(51, 51, 51, 0.2);
  flex: 1;
  margin: 8px 16px;
  max-width: 230px;

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
      border-bottom-color: #c53030;
    `}
`;
