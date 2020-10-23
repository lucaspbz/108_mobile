import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, Alert, TextInput, Keyboard } from 'react-native';
import axios from 'axios';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';

import Header from '../../components/Header';
import api, { statesApi } from '../../services/api';
import { userValidator } from '../../util/validators';
import getValidationErrors from '../../util/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  FormFieldSelect,
  Label,
  LoginForm,
  RegisterButton,
  Picker,
} from './styles';

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

interface CountriesRequestInterface {
  translations: { br: string };
  alpha3Code: string;
}

interface StatesInterface {
  name: string;
  id: string;
}

interface StatesRequestInterface {
  nome: string;
  id: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const nameFieldRef = useRef<TextInput>(null);
  const phoneFieldRef = useRef<TextInput>(null);
  const emailFieldRef = useRef<TextInput>(null);
  const passwordFieldRef = useRef<TextInput>(null);
  const confirmPasswordFieldRef = useRef<TextInput>(null);
  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<StatesInterface[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('BRA');

  const [states, setStates] = useState<StatesInterface[]>([]);
  const [selectedState, setSelectedState] = useState(0);

  const [cities, setCities] = useState<StatesInterface[]>([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
      const countries = data.map(
        ({ translations, alpha3Code }: CountriesRequestInterface) => {
          return {
            name: translations.br,
            id: alpha3Code,
          };
        },
      );

      setIsLoading(false);
      setCountries(countries);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    statesApi.get('/').then(({ data }) => {
      const states = data.map(({ id, nome }: StatesRequestInterface) => ({
        id,
        name: nome,
      }));

      setStates(states);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    statesApi.get(`/${selectedState}/municipios`).then(({ data }) => {
      const cities = data.map(({ id, nome }: StatesRequestInterface) => ({
        name: nome,
        id,
      }));

      setCities(cities);
    });
  }, [selectedState]);

  function handleSelectCountry(country: React.ReactText) {
    setSelectedCountry(country.toString());
  }

  function handleSelectState(state: React.ReactText) {
    setSelectedState(Number(state.toString()));
  }

  function handleSelectCity(city: React.ReactText) {
    setSelectedCity(city.toString());
  }

  async function handleSubmitForm({
    name,
    phone,
    password,
    confirmPassword,
    email,
  }: UserInterface) {
    const user = {
      phone,
      name,
      password,
      confirmPassword,
      email,

      country: countries.find(country => country.id === selectedCountry)?.name,
      state: states.find(state => {
        return Number(state.id) === selectedState;
      })?.name,
      city: selectedCity,
    };

    try {
      formRef.current?.setErrors({});
      await userValidator.validate(user, { abortEarly: false });
      if (user.country !== 'Brasil') {
        user.city = '';
        user.state = '';
      }
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
      }
    }
  }
  return (
    <Container>
      <Header>Preencha as informações para finalizar seu cadastro</Header>

      <LoginForm ref={formRef} onSubmit={handleSubmitForm}>
        <ScrollView>
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

          <FormFieldSelect>
            <Label>País:</Label>
            <Picker
              prompt="Selecione uma opção"
              selectedValue={selectedCountry}
              onValueChange={handleSelectCountry}
            >
              {!isLoading &&
                countries.map(({ name, id }) => (
                  <Picker.Item key={id} label={name} value={id} />
                ))}
            </Picker>
          </FormFieldSelect>
          {selectedCountry === 'BRA' && !isLoading && (
            <>
              <FormFieldSelect>
                <Label>Estado:</Label>
                <Picker
                  prompt="Selecione uma opção"
                  selectedValue={selectedState}
                  onValueChange={handleSelectState}
                >
                  {states.map(({ id, name }) => (
                    <Picker.Item key={id} label={name} value={id} />
                  ))}
                </Picker>
              </FormFieldSelect>

              <FormFieldSelect>
                <Label>Cidade:</Label>
                <Picker
                  prompt="Selecione uma opção"
                  selectedValue={selectedCity}
                  onValueChange={handleSelectCity}
                >
                  {cities.map(({ id, name }) => (
                    <Picker.Item label={name} value={name} key={id} />
                  ))}
                </Picker>
              </FormFieldSelect>
            </>
          )}
        </ScrollView>
      </LoginForm>

      <RegisterButton
        title="Finalizar cadastro"
        onPress={() => {
          formRef.current?.submitForm();
        }}
      />
    </Container>
  );
};

export default Register;
