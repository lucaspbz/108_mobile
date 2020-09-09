import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AuthenticatedHeader from '../../components/AuthenticatedHeader';

import NavBar from '../../components/NavBar';

import AvailableSchedule from '../../components/AvailableSchedule';
import WhoWeAre from '../../components/WhoWeAre';
import Contact from '../../components/Contact';

import styles from './styles';

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('AvailableSchedule');

  return (
    <View style={styles.container}>
      <AuthenticatedHeader />

      <Text style={styles.text}>Colabore com nossa jornada de cura !</Text>

      <View style={styles.main}>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'AvailableSchedule' && <AvailableSchedule />}

        {activeTab === 'WhoWeAre' && <WhoWeAre />}

        {activeTab === 'Contact' && <Contact />}
      </View>
    </View>
  );
};

export default MainPage;
