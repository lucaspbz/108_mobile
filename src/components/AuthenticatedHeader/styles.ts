import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: rgba(202, 83, 215, 0.6);
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const UserName = styled(RectButton)`
  position: absolute;
  top: ${Constants.statusBarHeight + 18}px;
  right: 18px;
  flex-direction: row;
`;

export const UserNameText = styled.Text`
  color: #4a2787;
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-size: 26px;
  line-height: 32px;
  max-width: 80%;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-top: 64px;
`;

export const Subtitle = styled.Text`
  color: #ffffff;
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  margin-bottom: 16px;
`;
