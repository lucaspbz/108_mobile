import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import Header from '../../components/Header';
import api, { statesApi } from '../../services/api';
import { userValidator } from '../../util/validators';

import styles from './styles';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  address: {
    country: string;
    state?: string;
    city?: string;
  };
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
  const navigate = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<StatesInterface[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('BRA');

  const [states, setStates] = useState<StatesInterface[]>([]);
  const [selectedState, setSelectedState] = useState(0);

  const [cities, setCities] = useState<StatesInterface[]>([]);
  const [selectedCity, setSelectedCity] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
      const countries = data.map(
        ({ translations, alpha3Code }: CountriesRequestInterface) => {
          return {
            name: translations.br,
            id: alpha3Code,
          };
        }
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
    country = country.toString();
    setSelectedCountry(country);
  }

  function handleSelectState(state: React.ReactText) {
    state = Number(state.toString());
    setSelectedState(state);
  }

  function handleSelectCity(city: React.ReactText) {
    city = city.toString();
    setSelectedCity(city);
  }

  function handleNameChange(name: string) {
    setName(name);
  }

  function handleEmailChange(email: string) {
    setEmail(email);
  }

  function handlePasswordChange(password: string) {
    setPassword(password);
  }

  function handleConfirmPasswordChange(confirmPassword: string) {
    setConfirmPassword(confirmPassword);
  }

  function handleSubmitForm() {
    const user = {
      name,
      email,
      password,
      confirmPassword,
      address: {
        country: countries.find((country) => country.id === selectedCountry)
          ?.name,
        state: states.find((state) => {
          return Number(state.id) === selectedState;
        })?.name,
        city: selectedCity,
      },
    };

    userValidator
      .validate(user)
      .then((ok) => {
        if (user.address.country !== 'Brasil') {
          delete user.address.city;
          delete user.address.state;
        }

        api
          .post('/users', user)
          .then(({ status }) => {
            if (status === 200) {
              navigate.navigate('Login');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>
      <Header>Preencha as informações para finalizar seu cadastro</Header>

      <View style={styles.loginForm}>
        <View style={styles.formField}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            onChangeText={handleNameChange}
            value={name}
            returnKeyType="next"
            autoCapitalize="words"
            autoFocus
            autoCompleteType="name"
            textContentType="name"
            placeholder="Seu nome aqui"
            style={styles.genericField}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            enablesReturnKeyAutomatically
            autoCompleteType="email"
            textContentType="emailAddress"
            placeholder="emaildousuario@usuario"
            style={styles.genericField}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            onChangeText={handlePasswordChange}
            value={password}
            placeholder="Digite uma senha"
            returnKeyType="next"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            style={styles.genericField}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Confirme sua senha:</Text>
          <TextInput
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
            placeholder="Confirme sua senha"
            returnKeyType="next"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            style={styles.genericField}
            passwordRules=""
          />
        </View>

        <View style={styles.formFieldSelect}>
          <Text style={styles.label}>País:</Text>
          <Picker
            style={styles.picker}
            prompt="Selecione uma opção"
            selectedValue={selectedCountry}
            onValueChange={(country) => {
              handleSelectCountry(country);
            }}
          >
            {!isLoading &&
              countries.map(({ name, id }) => (
                <Picker.Item key={id} label={name} value={id} />
              ))}
          </Picker>
        </View>
        {selectedCountry === 'BRA' && !isLoading && (
          <>
            <View style={styles.formFieldSelect}>
              <Text style={styles.label}>Estado:</Text>
              <Picker
                style={styles.picker}
                prompt="Selecione uma opção"
                selectedValue={selectedState}
                onValueChange={handleSelectState}
              >
                {states.map(({ id, name }) => (
                  <Picker.Item key={id} label={name} value={id} />
                ))}
              </Picker>
            </View>

            <View style={styles.formFieldSelect}>
              <Text style={styles.label}>Cidade:</Text>
              <Picker
                style={styles.picker}
                prompt="Selecione uma opção"
                selectedValue={selectedCity}
                onValueChange={handleSelectCity}
              >
                {cities.map(({ id, name }) => (
                  <Picker.Item label={name} value={name} key={id} />
                ))}
              </Picker>
            </View>
          </>
        )}
      </View>

      <View style={styles.registerButton}>
        <TouchableOpacity onPress={handleSubmitForm}>
          <Text style={styles.registerButtonText}> Finalizar cadastro </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
