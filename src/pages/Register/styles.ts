import styled from 'styled-components/native';
import { Form } from '@unform/mobile';
import { Picker as ReactNativePicker } from '@react-native-community/picker';
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

export const Label = styled.Text`
  max-width: 80px;
`;

export const FormFieldSelect = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Picker = styled(ReactNativePicker)`
  width: 80%;
`;

export const RegisterButton = styled(Button)`
  margin-bottom: 40px;
`;
