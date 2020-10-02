import React, { useRef, useCallback, useState } from 'react';
import { SafeAreaView, TextInput, Text } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { useSchedule } from '../../hooks/schedule';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './styles';

const Login: React.FC = () => {
  const [error, setError] = useState(false);
  const { signIn } = useAuth();
  const { updateAvailableTimes } = useSchedule();

  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(async ({ email, password }) => {
    signIn({ email, password })
      .then(updateAvailableTimes)
      .catch(error => {
        if (error.message === 'Request failed with status code 401') {
          setError(true);
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header>Insira suas informações para realizar o login</Header>

      <Form ref={formRef} style={styles.loginForm} onSubmit={handleLogin}>
        <ScrollView>
          <Input
            label="E-mail"
            name="email"
            placeholder="emaildousuario@usuario"
            autoCorrect={false}
            returnKeyType="next"
            autoCapitalize="none"
            enablesReturnKeyAutomatically
            autoFocus
            autoCompleteType="email"
            textContentType="emailAddress"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />

          <Input
            label="Senha"
            name="password"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            ref={passwordInputRef}
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
          {error && (
            <Text style={{ color: '#8739B3' }}>
              Algo errado com o login. Por favor, tente novamente.
            </Text>
          )}
        </ScrollView>
      </Form>

      <Button
        style={{ marginTop: 80 }}
        title="Entrar"
        onPress={() => {
          formRef.current?.submitForm();
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
