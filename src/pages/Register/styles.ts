import styled from 'styled-components/native';
import { Form } from '@unform/mobile';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const LoginForm = styled(Form)`
  width: 100%;
  margin-top: 48px;
  flex: 1;
`;

export const RegisterButton = styled(Button)`
  margin: 16px auto 32px;
`;
