import { Link } from '@react-navigation/native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const TextBold = styled.Text`
  font-weight: bold;
  font-size: 26px;
  color: #333333;
`;

export const WellcomeText = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #333333;
`;

export const Banner = styled.Image`
  width: 100%;
  margin: auto auto;
  resize-mode: contain;
`;

export const ButtonsContainer = styled.View`
  align-items: center;
  margin: auto auto 32px;
`;

export const AlreadyRegisteredButton = styled(Link)`
  margin-top: 25px;
`;

export const AlreadyRegisteredButtonText = styled.Text`
  color: #8739b3;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
`;
