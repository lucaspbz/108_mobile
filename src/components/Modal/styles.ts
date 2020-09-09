import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 16px;
`;

export const Body = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;

  text-align: center;

  color: #333333;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 16px;

  text-align: center;

  color: #333333;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const Confirm = styled.Text`
  margin: 0 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;

  text-align: center;

  color: #ca53d7;
`;

export const ModalContainer = styled.View`
  background-color: #fff;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 24px 0;
`;
