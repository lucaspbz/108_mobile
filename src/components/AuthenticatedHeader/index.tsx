import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import styles from './styles';

const AuthenticatedHeader: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigation();

  function handleNavigateToProfile() {
    navigate.navigate('UserProfile');
  }

  return (
    <View style={styles.header}>
      <RectButton style={styles.userName} onPress={handleNavigateToProfile}>
        <Text style={styles.userNameText}>{user?.name}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="#4A2787" />
      </RectButton>

      <Text style={styles.title}>108 horas orando com a Mãe Divina</Text>
      <Text style={styles.subtitle}>12 a 16 de Outubro de 2020</Text>
    </View>
  );
};

export default AuthenticatedHeader;
