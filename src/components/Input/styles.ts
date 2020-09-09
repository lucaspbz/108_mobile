import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`;

export const Label = styled.Text`
  max-width: 80px;
`;

export const TextInput = styled.TextInput`
  border-bottom-width: 0.5px;
  border-bottom-color: 'rgba(51, 51, 51, 0.2)';
  width: 240px;
  text-align: center;
`;
