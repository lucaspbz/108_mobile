import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import styles from './styles';

const AvailableSchedule: React.FC = () => {
  return (
    <View style={styles.body}>
      <View>
        <SafeAreaView>
          <Text style={styles.itemTitle}>Segunda-Feira, 12/10:</Text>
          <ScrollView horizontal style={styles.dayList}>
            <View style={[styles.scheduleItem, styles.selectedItem]}>
              <Text style={[styles.scheduleItemText, styles.selectedItemText]}>
                09:00
              </Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>11:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>12:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>13:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>14:00</Text>
            </View>
          </ScrollView>
        </SafeAreaView>

        <View>
          <Text style={styles.itemTitle}>Terça-Feira, 13/10:</Text>
          <ScrollView horizontal style={styles.dayList}>
            <View style={[styles.scheduleItem, styles.selectedItem]}>
              <Text style={[styles.scheduleItemText, styles.selectedItemText]}>
                09:00
              </Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>11:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>12:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>13:00</Text>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.itemTitle}>Quarta-Feira, 14/10:</Text>
          <ScrollView horizontal style={styles.dayList}>
            <View style={[styles.scheduleItem, styles.selectedItem]}>
              <Text style={[styles.scheduleItemText, styles.selectedItemText]}>
                09:00
              </Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>11:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>12:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>13:00</Text>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.itemTitle}>Quinta-Feira, 15/10:</Text>
          <ScrollView horizontal style={styles.dayList}>
            <View style={[styles.scheduleItem, styles.selectedItem]}>
              <Text style={[styles.scheduleItemText, styles.selectedItemText]}>
                09:00
              </Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>11:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>12:00</Text>
            </View>
            <View style={styles.scheduleItem}>
              <Text style={styles.scheduleItemText}>13:00</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default AvailableSchedule;
