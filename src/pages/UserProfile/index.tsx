import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const UserProfile: React.FC = () => {
  const navigate = useNavigation();

  function handleGoBackButton() {
    navigate.goBack();
  }
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="arrow-back"
        size={24}
        color="black"
        style={styles.goBackIcon}
        onPress={handleGoBackButton}
      />

      <Text style={styles.userName}>Lucas Pinheiro</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://avatars0.githubusercontent.com/u/59059141?s=460&u=8f3d3703ef24b4436288f77adedf3408ffc56852&v=4',
          }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <MaterialIcons name="edit" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.wellcomeText}>
        Olá, Lucas Pinheiro!{'\n'}
        Seja bem-vindo!
      </Text>

      <ScrollView style={styles.list}>
        <Text style={styles.description}>Seus horários:</Text>

        <View style={styles.itemCard}>
          <Text style={styles.date}>Segunda-feira, 12/10:</Text>
          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>07:00</Text>
            <TouchableOpacity>
              <MaterialIcons name="delete" size={24} color="#4DACD1" />
            </TouchableOpacity>
          </View>

          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>08:00</Text>
            <MaterialIcons name="delete" size={24} color="#4DACD1" />
          </View>
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.date}>Terça-feira, 13/10:</Text>
          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>07:00</Text>
            <MaterialIcons name="delete" size={24} color="#4DACD1" />
          </View>

          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>08:00</Text>
            <MaterialIcons name="delete" size={24} color="#4DACD1" />
          </View>
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.date}>Quarta-feira, 14/10:</Text>
          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>07:00</Text>
            <MaterialIcons name="delete" size={24} color="#4DACD1" />
          </View>

          <View style={styles.itemLine}>
            <Text style={styles.itemHour}>08:00</Text>
            <MaterialIcons name="delete" size={24} color="#4DACD1" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
