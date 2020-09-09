import React from 'react';
import { ButtonProps as ReactButtonProps, ViewStyle } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends ReactButtonProps {
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ style, title, ...rest }) => {
  return (
    <Container style={style} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
