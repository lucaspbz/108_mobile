import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSchedule } from '../../hooks/schedule';

import { formatToDayString, formatToHour } from '../../util/dateParser';

import styles from './styles';

const AvailableSchedule: React.FC = () => {
  const navigation = useNavigation();
  const {
    availableSchedule: mappedSchedule,
    toggleSelectedIcon,
    selectedTimes,
  } = useSchedule();

  function handlePressTimeItem(time: string) {
    toggleSelectedIcon(time);
  }

  function handleConfirmSelectedTimes() {
    //TODO
    navigation.navigate('ConfirmedSelectedSchedule');
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
              <Text style={styles.itemTitle}>{formattedDay}:</Text>
              <FlatList
                keyExtractor={(item) => item}
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
              ></FlatList>
            </View>
          );
        }}
      ></FlatList>
      {selectedTimes.length > 0 && (
        <TouchableOpacity
          style={styles.button}
          onPress={handleConfirmSelectedTimes}
        >
          <Text style={styles.buttonText}>Confirme meu(s) horário(s)</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AvailableSchedule;
