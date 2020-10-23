import styled from 'styled-components/native';
import { Picker as ReactNativePicker } from '@react-native-community/picker';

export const Container = styled.View`
  flex: 1;
`;

export const Picker = styled(ReactNativePicker)`
  width: 100%;
`;

export const Label = styled.Text`
  width: 100%;
  text-align: left;
`;
