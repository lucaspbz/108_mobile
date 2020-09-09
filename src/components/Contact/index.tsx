import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import styles from './styles';

const Contact: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.contactsContainer}>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => {
              Linking.openURL('tel:+55 21 974.717.222');
            }}
          >
            <MaterialIcons name="phone" size={24} color="#CA53D7" />
            <Text style={styles.contactText}>+55 21 974.717.222</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => {
              Linking.openURL('tel:+55 48 996.344.072');
            }}
          >
            <MaterialIcons name="phone" size={24} color="#CA53D7" />
            <Text style={styles.contactText}>+55 48 996.344.072</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => {
              Linking.openURL('tel:+55 48 999.896.133');
            }}
          >
            <MaterialIcons name="phone" size={24} color="#CA53D7" />
            <Text style={styles.contactText}>+55 48 999.896.133</Text>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <AntDesign name="youtube" size={24} color="#CA53D7" />
            <Text
              onPress={() => {
                Linking.openURL(
                  'https://www.youtube.com/channel/UCVLXWO4ZmKdUjuiJCVhKg7Q'
                );
              }}
              style={[
                styles.contactText,
                { textDecorationLine: 'underline', color: '#CA53D7' },
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
