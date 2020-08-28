import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AuthenticatedHeader from '../../components/AuthenticatedHeader';

import NavBar from '../../components/NavBar';

import AvailableSchedule from '../AvailableSchedule';
import WhoWeAre from '../WhoWeAre';
import Contact from '../Contact';

import styles from './styles';

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('AvailableSchedule');
  return (
    <View style={styles.container}>
      <AuthenticatedHeader />

      <Text style={styles.body}>Colabore com nossa jornada de cura !</Text>

      <View style={styles.textContainer}>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'AvailableSchedule' && <AvailableSchedule />}

        {activeTab === 'WhoWeAre' && <WhoWeAre />}

        {activeTab === 'Contact' && <Contact />}
      </View>
    </View>
  );
};

export default MainPage;
