import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/login.png';

import {
  AlreadyRegisteredButton,
  AlreadyRegisteredButtonText,
  Banner,
  ButtonsContainer,
  Container,
  TextBold,
  TextContainer,
  WellcomeText,
} from './styles';
import Button from '../../components/Button';

const Landing: React.FC = () => {
  const navigation = useNavigation();
  const handleRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);
  return (
    <Container>
      <TextContainer>
        <TextBold>Bem-vindo!</TextBold>
        <WellcomeText>
          Seja bem-vindo ao 108 horas orando com a Mãe Divina, um movimento
          coletivo e ecumênico de pessoas orando junto à Mãe Divina
        </WellcomeText>
      </TextContainer>

      <Banner source={landingImg} />

      <ButtonsContainer>
        <Button title="Cadastre-se" onPress={handleRegister} />

        <AlreadyRegisteredButton to="/Login">
          <AlreadyRegisteredButtonText>
            Já tenho conta
          </AlreadyRegisteredButtonText>
        </AlreadyRegisteredButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Landing;
