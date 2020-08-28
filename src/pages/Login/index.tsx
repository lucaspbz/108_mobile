import React, { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import styles from './styles';

const Login: React.FC = () => {
  const ref_input2 = useRef();
  const navigate = useNavigation();

  function handleLogin() {
    navigate.navigate('MainPage');
  }

  return (
    <View style={styles.container}>
      <Header>Insira suas informações para realizar o login</Header>

      <View style={styles.loginForm}>
        <View style={styles.formField}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            onSubmitEditing={() => {
              ref_input2.current.focus();
            }}
            returnKeyType="next"
            autoCapitalize="none"
            enablesReturnKeyAutomatically
            autoFocus
            autoCompleteType="email"
            textContentType="emailAddress"
            placeholder="emaildousuario@usuario"
            style={styles.emailField}
          ></TextInput>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            style={styles.passwordField}
            ref={ref_input2}
          ></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
