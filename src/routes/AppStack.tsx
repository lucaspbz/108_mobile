import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainPage from '../pages/MainPage';
import WhoWeAre from '../pages/WhoWeAre';
import Contact from '../pages/Contact';
import UserProfile from '../pages/UserProfile';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="MainPage" component={MainPage} />
        <Screen name="WhoWeAre" component={WhoWeAre} />
        <Screen name="Contact" component={Contact} />
        <Screen name="UserProfile" component={UserProfile} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
