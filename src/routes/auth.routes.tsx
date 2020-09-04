import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="Landing" component={Landing} />
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Register" component={Register} />
  </Auth.Navigator>
);
export default AuthRoutes;
