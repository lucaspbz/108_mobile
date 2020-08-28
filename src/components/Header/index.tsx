import React from 'react';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Header: React.FC = ({ children }) => {
  const navigate = useNavigation();

  function handleGoBackButton() {
    navigate.goBack();
  }
  return (
    <>
      <MaterialIcons
        name="arrow-back"
        size={24}
        color="black"
        style={styles.goBackIcon}
        onPress={handleGoBackButton}
      />

      <Text style={styles.headerText}>{children}</Text>
    </>
  );
};

export default Header;
