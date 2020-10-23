import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { useSchedule } from '../../hooks/schedule';

import { Header, UserName, UserNameText, Subtitle, Title } from './styles';

const AuthenticatedHeader: React.FC = () => {
  const { activePeriod } = useSchedule();
  const { user } = useAuth();
  const navigate = useNavigation();

  function handleNavigateToProfile() {
    navigate.navigate('UserProfile');
  }

  return (
    <Header>
      <UserName onPress={handleNavigateToProfile}>
        <UserNameText>{user?.name}</UserNameText>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="#4A2787" />
      </UserName>

      <Title>108 horas orando com a Mãe Divina</Title>
      <Subtitle>{activePeriod}</Subtitle>
    </Header>
  );
};

export default AuthenticatedHeader;
