import React, { useRef, useState, useCallback } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';
import { useSchedule } from '../../hooks/schedule';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './styles';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const { updateAvailableTimes } = useSchedule();

  const ref_input2 = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormHandles>(null);

  const handleLogin = useCallback(async ({ email, password }) => {
    signIn({ email, password })
      .then((response) => updateAvailableTimes())
      .catch((error) => {
        if (error.message === 'Request failed with status code 401') {
          Alert.alert('Email ou senha incorretos!');
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header>Insira suas informações para realizar o login</Header>

      <Form ref={formRef} style={styles.loginForm} onSubmit={handleLogin}>
        <Input
          label="E-mail"
          name="email"
          placeholder="emaildousuario@usuario"
          returnKeyType="next"
          autoCapitalize="none"
          enablesReturnKeyAutomatically
          autoFocus
          autoCompleteType="email"
          textContentType="emailAddress"
        />

        <Input
          label="Senha"
          name="password"
          secureTextEntry
          autoCapitalize="none"
          textContentType="password"
          style={styles.passwordField}
          ref={ref_input2}
        />
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
