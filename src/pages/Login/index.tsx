import React, { useRef, useState, useCallback } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';
import { useSchedule } from '../../hooks/schedule';

import Header from '../../components/Header';

import styles from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const { updateAvailableTimes } = useSchedule();

  const ref_input2 = useRef<HTMLInputElement>();

  const handleLogin = useCallback(async () => {
    signIn({ email, password })
      .then((response) => updateAvailableTimes())
      .catch((error) => {
        if (error.message === 'Request failed with status code 401') {
          Alert.alert('Email ou senha incorretos!');
        }
      });
  }, [email, password]);

  const handleEmailChange = useCallback(
    (text) => {
      setEmail(text);
    },
    [email]
  );

  const handlePasswordChange = useCallback(
    (text) => {
      setPassword(text);
    },
    [password]
  );

  return (
    <View style={styles.container}>
      <Header>Insira suas informações para realizar o login</Header>

      <View style={styles.loginForm}>
        <View style={styles.formField}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            onSubmitEditing={() => {
              ref_input2.current?.focus();
            }}
            returnKeyType="next"
            autoCapitalize="none"
            enablesReturnKeyAutomatically
            autoFocus
            autoCompleteType="email"
            textContentType="emailAddress"
            placeholder="emaildousuario@usuario"
            style={styles.emailField}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            style={styles.passwordField}
            ref={ref_input2}
            onChangeText={handlePasswordChange}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
