import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import UserProfile from '../pages/UserProfile';
import ConfirmedSelectedSchedule from '../pages/ConfirmedSelectedSchedule';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="MainPage" component={MainPage} />
    <App.Screen name="UserProfile" component={UserProfile} />
    <App.Screen
      name="ConfirmedSelectedSchedule"
      component={ConfirmedSelectedSchedule}
    />
  </App.Navigator>
);
export default AppRoutes;
