import React, { useEffect } from 'react';

import { AxiosResponse } from 'axios';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useSchedule } from '../../hooks/schedule';
import { useAuth } from '../../hooks/auth';

import { formatToDayString, formatToHour } from '../../util/dateParser';

import styles from './styles';
import api from '../../services/api';
import Button from '../Button';

const AvailableSchedule: React.FC = () => {
  const navigation = useNavigation();
  const {
    availableSchedule: mappedSchedule,
    toggleSelectedIcon,
    selectedTimes,
    updateAvailableTimes,
  } = useSchedule();

  const { signOut } = useAuth();

  function handlePressTimeItem(time: string) {
    toggleSelectedIcon(time);
  }

  useEffect(() => {
    updateAvailableTimes();
  }, [updateAvailableTimes]);

  function handleConfirmSelectedTimes() {
    const promises: Promise<AxiosResponse>[] = [];

    selectedTimes.forEach(time => {
      const newPromise = api.post('/appointments', {
        date: time,
      });
      promises.push(newPromise);
    });

    Promise.all(promises)
      .then(() => {
        updateAvailableTimes();
        navigation.navigate('ConfirmedSelectedSchedule');
      })
      .catch(err => {
        if (err.response.data.message === 'Invalid JWT token') {
          Alert.alert(
            'Error:',
            'Ops, parece que sua sessão expirou! Favor fazer login novamente.',
          );
          signOut();
        }
        if (err.response.data.message === 'JWT token is missing') {
          Alert.alert(
            'Error:',
            'Ops, algo deu errado! Favor fazer login novamente.',
          );
          signOut();
        }
      });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mappedSchedule}
        keyExtractor={({ day }) => day.toString()}
        renderItem={({ item: { day, times } }) => {
          const formattedDay = formatToDayString({ day });
          return (
            <View key={day.toString()}>
              <View style={styles.dayTitleContainer}>
                <MaterialCommunityIcons
                  name="calendar-blank"
                  size={24}
                  color="#8739B3"
                />
                <Text style={styles.itemTitle}>{formattedDay}:</Text>
              </View>
              <FlatList
                keyExtractor={item => item}
                data={times}
                horizontal
                style={styles.dayList}
                renderItem={({ item: time }) => {
                  const formattedTime = formatToHour({ time });
                  return (
                    <TouchableOpacity
                      key={time}
                      onPress={() => {
                        handlePressTimeItem(time);
                      }}
                      style={[
                        styles.scheduleItem,
                        selectedTimes.includes(time)
                          ? styles.selectedItem
                          : null,
                      ]}
                    >
                      <Text
                        style={[
                          styles.scheduleItemText,
                          selectedTimes.includes(time)
                            ? styles.selectedItemText
                            : null,
                        ]}
                      >
                        {formattedTime}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        }}
      />
      <View style={{ height: 100 }}>
        {selectedTimes.length > 0 && (
          <Button
            style={styles.button}
            title="Confirme meu(s) horário(s)"
            onPress={handleConfirmSelectedTimes}
          />
        )}
      </View>
    </View>
  );
};

export default AvailableSchedule;
