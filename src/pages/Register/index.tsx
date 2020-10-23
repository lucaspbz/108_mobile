import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {
  ScrollView,
  Alert,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';

import Header from '../../components/Header';
import api from '../../services/api';
import { userValidator } from '../../util/validators';
import getValidationErrors from '../../util/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import { Container, LoginForm, RegisterButton } from './styles';
import Select from '../../components/Select';

interface UserInterface {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  state?: string;
  city?: string;
}

interface Country {
  id: number;
  name: string;
  states: State[];
}

interface State {
  id: number;
  name: string;
  cities: City[];
}

interface City {
  id: number;
  name: string;
}

const Register: React.FC = () => {
  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const nameFieldRef = useRef<TextInput>(null);
  const phoneFieldRef = useRef<TextInput>(null);
  const emailFieldRef = useRef<TextInput>(null);
  const passwordFieldRef = useRef<TextInput>(null);
  const confirmPasswordFieldRef = useRef<TextInput>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState(31);

  const [selectedState, setSelectedState] = useState(0);

  const [selectedCity, setSelectedCity] = useState(0);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const response = await fetch(
        'https://raw.githubusercontent.com/lucaspbz/countries-states-cities-database/master/countries%2Bstates%2Bcities.json',
      );

      const data: Country[] = await response.json();
      setIsLoading(false);
      setCountries(data);
    }
    loadData();
  }, []);

  const states = useMemo(() => {
    if (!countries) {
      return [];
    }
    const foundCountry = countries.find(
      country => country.id === selectedCountry,
    );

    if (!foundCountry) {
      return [];
    }
    return foundCountry.states;
  }, [countries, selectedCountry]);

  const cities = useMemo(() => {
    if (!states) {
      return [];
    }

    const foundState = states.find(state => state.id === selectedState);
    if (!foundState) {
      return [];
    }

    return foundState.cities;
  }, [selectedState, states]);

  const handleSelectCountry = useCallback((country: React.ReactText) => {
    setSelectedCountry(Number(country));
  }, []);

  const handleSelectState = useCallback((state: React.ReactText) => {
    setSelectedState(Number(state));
  }, []);

  const handleSelectCity = useCallback((city: React.ReactText) => {
    setSelectedCity(Number(city));
  }, []);

  const handleSubmitForm = useCallback(
    async ({
      name,
      phone,
      password,
      confirmPassword,
      email,
    }: UserInterface) => {
      setIsLoading(true);
      const user = {
        phone,
        name,
        password,
        confirmPassword,
        email,

        country: countries.find(country => country.id === selectedCountry)
          ?.name,
        state: states.find(state => state.id === selectedState)?.name,
        city: cities.find(city => city.id === selectedCity)?.name,
      };

      try {
        formRef.current?.setErrors({});
        await userValidator.validate(user, { abortEarly: false });
        api.post('/users', user).then(({ status }) => {
          if (status === 200) {
            Alert.alert(
              'Cadastro realizado com sucesso!',
              'Você será redirecionado para a página principal.',
            );
            signIn({ email, password });
          }
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err.inner);

          Alert.alert(
            'Erro:',
            'Algo deu errado, por favor confira os dados inseridos.',
          );
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          setIsLoading(false);
        }
      }
    },
    [
      cities,
      countries,
      selectedCity,
      selectedCountry,
      selectedState,
      signIn,
      states,
    ],
  );
  return (
    <Container>
      <Header>Preencha as informações para finalizar seu cadastro</Header>

      <LoginForm ref={formRef} onSubmit={handleSubmitForm}>
        <KeyboardAvoidingView style={{ flex: 1 }} enabled>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              name="name"
              label="Nome"
              placeholder="Seu nome aqui"
              returnKeyType="next"
              autoCapitalize="words"
              autoCompleteType="name"
              textContentType="name"
              ref={nameFieldRef}
              onSubmitEditing={() => {
                phoneFieldRef.current?.focus();
              }}
            />

            <Input
              name="phone"
              label="Telefone"
              placeholder="(00) 98765.4321"
              returnKeyType="next"
              autoCompleteType="tel"
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              ref={phoneFieldRef}
              onSubmitEditing={() => {
                emailFieldRef.current?.focus();
              }}
            />

            <Input
              autoCorrect={false}
              name="email"
              label="E-mail"
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              enablesReturnKeyAutomatically
              autoCompleteType="email"
              textContentType="emailAddress"
              placeholder="emaildousuario@usuario"
              ref={emailFieldRef}
              onSubmitEditing={() => {
                passwordFieldRef.current?.focus();
              }}
            />

            <Input
              name="password"
              label="Senha"
              placeholder="Digite uma senha"
              returnKeyType="next"
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
              ref={passwordFieldRef}
              onSubmitEditing={() => {
                confirmPasswordFieldRef.current?.focus();
              }}
            />

            <Input
              name="confirmPassword"
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              returnKeyType="next"
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
              ref={confirmPasswordFieldRef}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />

            <Select
              label="País"
              selectedValue={selectedCountry}
              options={countries.map(country => ({
                label: country.name,
                value: country.id,
              }))}
              onValueChange={handleSelectCountry}
            />

            <>
              <Select
                label="Estado"
                selectedValue={selectedState}
                options={states.map(state => ({
                  label: state.name,
                  value: state.id,
                }))}
                onValueChange={handleSelectState}
                enabled={!!states.length}
              />

              <Select
                label="Cidade"
                selectedValue={selectedCity}
                options={cities.map(city => ({
                  label: city.name,
                  value: city.id,
                }))}
                onValueChange={handleSelectCity}
                enabled={!!cities.length}
              />
            </>
          </ScrollView>
        </KeyboardAvoidingView>
      </LoginForm>

      <RegisterButton
        title={isLoading ? 'Aguarde...' : 'Finalizar cadastro'}
        onPress={() => {
          formRef.current?.submitForm();
        }}
      />
    </Container>
  );
};

export default Register;
