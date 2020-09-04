import React, { useRef, useState, useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';

import styles from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const ref_input2 = useRef();

  const handleLogin = useCallback(async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      console.log(error.message);
    }
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
