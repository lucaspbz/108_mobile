import styled, { css } from 'styled-components/native';

interface TextInputProps {
  isErrored: boolean;
}

export const Container = styled.View`
  margin-bottom: 24px;
  margin-right: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  width: 100%;
  min-height: 24px;
  flex: 1;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(51, 51, 51, 0.2);
  flex: 1;
  margin: 8px 16px 0 auto;
  width: 100%;
  min-height: 24px;

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
      border-bottom-color: #c53030;
    `};
`;
