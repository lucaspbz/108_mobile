import React from 'react';
import { View, Text, Linking } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import styles from './styles';
import AuthenticatedHeader from '../../components/AuthenticatedHeader';
import NavBar from '../../components/NavBar';

const Contact: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <AuthenticatedHeader />

      <Text style={styles.body}>Colabore com nossa jornada de cura !</Text> */}

      <View style={styles.footer}>
        {/* <NavBar page="Contact" /> */}

        <View style={styles.contactsContainer}>
          <View style={styles.contactItem}>
            <MaterialIcons name="phone" size={24} color="#4DACD1" />
            <Text style={styles.contactText}>+55 21 974.717.222</Text>
          </View>

          <View style={styles.contactItem}>
            <MaterialIcons name="phone" size={24} color="#4DACD1" />
            <Text style={styles.contactText}>+55 48 996.344.072</Text>
          </View>

          <View style={styles.contactItem}>
            <MaterialIcons name="phone" size={24} color="#4DACD1" />
            <Text style={styles.contactText}>+55 48 999.896.133</Text>
          </View>

          <View style={styles.contactItem}>
            <AntDesign name="youtube" size={24} color="#4DACD1" />
            <Text
              onPress={() => {
                Linking.openURL(
                  'https://www.youtube.com/channel/UCVLXWO4ZmKdUjuiJCVhKg7Q'
                );
              }}
              style={[
                styles.contactText,
                { textDecorationLine: 'underline', color: '#4DACD1' },
              ]}
            >
              Nosso canal do Youtube
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contact;
