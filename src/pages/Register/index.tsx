import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../../components/Header';

import styles from './styles';

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header>Preencha as informações para finalizar seu cadastro</Header>

      <View style={styles.loginForm}>
        <View style={styles.formField}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            // onSubmitEditing={() => {
            //   ref_input2.current.focus();
            // }}
            returnKeyType="next"
            autoCapitalize="words"
            // autoFocus
            autoCompleteType="name"
            textContentType="name"
            placeholder="Seu nome aqui"
            style={styles.genericField}
          ></TextInput>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            // onSubmitEditing={() => {
            //   ref_input2.current.focus();
            // }}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            enablesReturnKeyAutomatically
            // autoFocus
            autoCompleteType="email"
            textContentType="emailAddress"
            placeholder="emaildousuario@usuario"
            style={styles.genericField}
          ></TextInput>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            // onSubmitEditing={() => {
            //   ref_input2.current.focus();
            // }}
            keyboardType="phone-pad"
            returnKeyType="next"
            autoCapitalize="none"
            enablesReturnKeyAutomatically
            // autoFocus
            autoCompleteType="tel"
            textContentType="telephoneNumber"
            placeholder="(00) 123456789"
            style={styles.genericField}
          ></TextInput>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            returnKeyType="next"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            style={styles.secretField}
            // ref={ref_input2}
          ></TextInput>
        </View>

        <View style={styles.formField}>
          <Text style={styles.label}>Confirme sua senha:</Text>
          <TextInput
            returnKeyType="next"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            style={styles.secretField}
            // ref={ref_input2}
          ></TextInput>
        </View>

        <View style={styles.formFieldSelect}>
          <Text style={styles.label}>País:</Text>
          <Picker style={styles.picker} prompt="Selecione uma opção">
            <Picker.Item label="Brasil" value="br" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <View style={styles.formFieldSelect}>
          <Text style={styles.label}>Estado:</Text>
          <Picker style={styles.picker} prompt="Selecione uma opção">
            <Picker.Item label="Ceará" value="br" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <View style={styles.formFieldSelect}>
          <Text style={styles.label}>Cidade:</Text>
          <Picker style={styles.picker} prompt="Selecione uma opção">
            <Picker.Item label="Fortaleza" value="br" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      </View>

      <View style={styles.registerButton}>
        <TouchableOpacity>
          <Text style={styles.registerButtonText}> Finalizar cadastro </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
