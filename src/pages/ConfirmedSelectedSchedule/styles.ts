import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const GoBackIcon = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  left: 24px;
  background-color: #fff;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const MainText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  text-align: center;

  color: #333333;

  margin-top: 16px;
`;

export const ProgressCircle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Footer = styled.Text`
  margin: auto 36px 64px 36px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #333333;
`;

export const TextBold = styled.Text`
  font-weight: bold;
  color: #ca53d7;
`;
