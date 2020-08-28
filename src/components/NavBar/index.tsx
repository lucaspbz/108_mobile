import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface NavBarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  function handleNavigateTab(destinationTab: string) {
    setActiveTab(destinationTab);
  }

  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        onPress={() => {
          handleNavigateTab('AvailableSchedule');
        }}
        style={styles.tabItems}
      >
        <Text
          style={[
            styles.tabItemsText,
            activeTab === 'AvailableSchedule' ? styles.activeText : null,
          ]}
        >
          Horários
        </Text>
        <View
          style={activeTab === 'AvailableSchedule' ? styles.activeBar : null}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleNavigateTab('WhoWeAre');
        }}
        style={styles.tabItems}
      >
        <Text
          style={[
            styles.tabItemsText,
            activeTab === 'WhoWeAre' ? styles.activeText : null,
          ]}
        >
          Quem somos
        </Text>
        <View style={activeTab === 'WhoWeAre' ? styles.activeBar : null} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleNavigateTab('Contact');
        }}
        style={styles.tabItems}
      >
        <Text
          style={[
            styles.tabItemsText,
            activeTab === 'Contact' ? styles.activeText : null,
          ]}
        >
          Contato
        </Text>
        <View style={activeTab === 'Contact' ? styles.activeBar : null} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
