import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';

import Routes from './src/routes';

export default function App() {
  // useEffect(() => {
  //   api
  //     .get('/appointments/available', {
  //       params: {
  //         start: '2020-08-25T18:24:14.144Z',
  //         end: '2020-08-29T18:24:14.144Z',
  //       },
  //     })
  //     .then(({ data }) => {
  //       setGroupedSchedule(groupByDates({ data }));
  //     });
  // }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden />

      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
