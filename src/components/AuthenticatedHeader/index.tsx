import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const AuthenticatedHeader: React.FC = () => {
  const navigate = useNavigation();

  function handleNavigateToProfile() {
    navigate.navigate('UserProfile');
  }

  return (
    <View style={styles.header}>
      <RectButton style={styles.imgContainer} onPress={handleNavigateToProfile}>
        <Image
          source={{
            uri:
              'https://avatars0.githubusercontent.com/u/59059141?s=460&u=8f3d3703ef24b4436288f77adedf3408ffc56852&v=4https://avatars2.githubusercontent.com/u/59059141?s=60&v=4',
          }}
          style={styles.avatar}
        />
      </RectButton>

      <Text style={styles.title}>108 horas orando com a Mãe Divina</Text>
      <Text style={styles.subtitle}>12 a 16 de Outubro de 2020</Text>
    </View>
  );
};

export default AuthenticatedHeader;
