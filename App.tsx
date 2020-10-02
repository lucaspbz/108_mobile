import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';

import Routes from './src/routes';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar hidden />

      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
