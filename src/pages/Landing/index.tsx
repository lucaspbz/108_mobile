import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from '@react-navigation/native';

import landingImg from '../../assets/login.png';

import styles from './styles';

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textBold}>Bem-vindo!</Text>
        <Text style={styles.wellcomeText}>
          Seja bem-vindo ao 108 horas orando com a Mãe Divina, um movimento
          coletivo e ecumênico de pessoas orando junto à Mãe Divina
        </Text>
      </View>

      <Image style={styles.banner} source={landingImg} />

      <View style={styles.buttonsContainer}>
        <View style={styles.registerButton}>
          <Link to="/Register">
            <Text style={styles.registerButtonText}> Cadastre-se </Text>
          </Link>
        </View>

        <Link style={styles.alreadyRegisteredButton} to="/Login">
          <Text style={styles.alreadyRegisteredButtonText}>Já tenho conta</Text>
        </Link>
      </View>
    </View>
  );
};

export default Landing;
