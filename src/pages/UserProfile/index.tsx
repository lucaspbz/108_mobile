import React, { useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import styles from './styles';

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigation();

  function handleGoBackButton() {
    navigate.goBack();
  }

  const handleLogout = useCallback(() => {
    signOut();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color="#4A2787"
          style={styles.goBackIcon}
          onPress={handleGoBackButton}
        />

        <Text style={styles.userName}>Olá, {user.name}</Text>
      </View>

      <ScrollView style={styles.list}>
        <Text style={styles.description}>Meus horários:</Text>

        <View style={styles.itemCard}>
          <View style={styles.dateContainer}>
            <MaterialCommunityIcons
              name="calendar-blank"
              size={24}
              color="#8739B3"
            />
            <Text style={styles.date}>Segunda-feira, 12/10:</Text>
          </View>
          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>07:00</Text>
            <TouchableOpacity>
              <MaterialIcons name="delete" size={24} color="#CA53D7" />
            </TouchableOpacity>
          </View>

          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>08:00</Text>
            <MaterialIcons name="delete" size={24} color="#CA53D7" />
          </View>
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.date}>Terça-feira, 13/10:</Text>
          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>07:00</Text>
            <MaterialIcons name="delete" size={24} color="#CA53D7" />
          </View>

          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>08:00</Text>
            <MaterialIcons name="delete" size={24} color="#CA53D7" />
          </View>
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.date}>Quarta-feira, 14/10:</Text>
          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>07:00</Text>
            <MaterialIcons name="delete" size={24} color="#CA53D7" />
          </View>

          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>08:00</Text>
            <MaterialIcons name="delete" size={24} color="#CA53D7" />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
