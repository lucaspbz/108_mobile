import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';

import styles from './styles';

const WhoWeAre: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.text}>
            108 horas Orando com a Mãe Divina é um movimento coletivo e
            ecumênico de pessoas orando junto à Mãe Divina unidas no objetivo de
            elevar e expandir o Amor Fraternal no planeta.
            {'\n'}
            {'\n'}É uma jornada de 4 dias e meio de orações contínuas que visam
            nutrir o coração da humanidade de amor incondicional.
            {'\n'}
            {'\n'}
            Estamos nos preparando para a Quarta Jornada, que acontecerá dos
            dias <Text style={styles.bold}>12</Text> à{' '}
            <Text style={styles.bold}>16</Text> de{' '}
            <Text style={styles.bold}>Outubro</Text> de{' '}
            <Text style={styles.bold}>2020</Text>.{'\n'}
            {'\n'}
            Qualquer pessoa, independente de idade, gênero, raça, religião ou
            nacionalidade, pode escolher um horário que ainda esteja vago e nele
            fazer orações da forma que quiser: orações formais, espontâneas,
            cantos, mantras, meditações, sintonizações, danças, música, tocar um
            instrumento, etc. seja o que escolher, o importante é que brote do
            seu coração.
            {'\n'}
            {'\n'}
            Estas foram as Jornadas de 108 Horas de Oração até hoje:{'\n'}A
            primeira jornada aconteceu de 7 a 11 de Setembro de 2019 {'\n'}A
            segunda jornada aconteceu de 8 a 12 de Dezembro de 2019{'\n'}A
            terceira jornada, aconteceu de 8 a 12 de Abril de 2020.
            {'\n'}
            {'\n'}
            Participe do nosso Canal no Telegram:{' '}
            <Text
              onPress={() => {
                Linking.openURL('http://t.me/Orando108Horas');
              }}
              style={[
                {
                  textDecorationLine: 'underline',
                  color: '#CA53D7',
                },
              ]}
            >
              http://t.me/Orando108Horas
            </Text>
            {'\n'}
            {'\n'}
            Gratidão e seguimos em união à Mãe Divina
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default WhoWeAre;
