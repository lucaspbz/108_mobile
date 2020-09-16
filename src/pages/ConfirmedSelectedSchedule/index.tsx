import React from 'react';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import AuthenticatedHeader from '../../components/AuthenticatedHeader';

import thanksImg from '../../assets/thanksImg.png';

import {
  Container,
  GoBackIcon,
  MainText,
  ProgressCircle,
  Footer,
  TextBold,
} from './styles';

const ConfirmedSelectedSchedule: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <GoBackIcon
        onPress={() => {
          navigation.navigate('MainPage');
        }}
      >
        <MaterialIcons name="arrow-back" size={24} color="#4A2787" />
      </GoBackIcon>

      <AuthenticatedHeader />

      <MainText>Gratidão! Juntos somos mais fortes!</MainText>

      <ProgressCircle>
        <AnimatedCircularProgress
          size={216}
          width={24}
          fill={30}
          tintColor="#CA53D7"
          backgroundColor="rgba(223, 152, 231, 0.5)"
          style={{ position: 'absolute' }}
          lineCap="round"
          rotation={180}
        />
        <Image source={thanksImg} />
      </ProgressCircle>

      {/*   TODO make percentage dynamic       */}
      <Footer>
        Com a sua ajuda já chegamos a <TextBold>33%</TextBold> da nossa meta!
      </Footer>
    </Container>
  );
};

export default ConfirmedSelectedSchedule;
