import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import FrameImg from '../../assets/Frame.png';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  UserName,
  Description,
  List,
  ItemCard,
  DateContainer,
  Date,
  ItemLine,
  ItemHour,
  LogoutContainer,
  LogoutText,
  NoAppointmentsContainer,
  NoAppointmentsImage,
  NoAppointmentsMainText,
  NoAppointmentsSmallText,
} from './styles';
import api from '../../services/api';

import {
  groupByDates,
  MappedScheduleInterface,
  formatToDayString,
  formatToHour,
} from '../../util/dateParser';

const UserProfile: React.FC = () => {
  const [appointments, setAppointments] = useState<
    MappedScheduleInterface[] | null
  >([]);
  const { user, signOut } = useAuth();
  const navigate = useNavigation();

  useEffect(() => {
    api.get(`/users/${user?.id}`).then(({ data }) => {
      try {
        const filteredAppointments = data.appointments.map((item) => item.date);

        const appointmentsByDay = groupByDates({ data: filteredAppointments });
        setAppointments(appointmentsByDay);
      } catch (error) {
        setAppointments(null);
      }
    });
  }, []);

  function handleGoBackButton() {
    navigate.goBack();
  }

  const handleLogout = useCallback(() => {
    signOut();
  }, []);

  return (
    <Container>
      <Header>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color="#4A2787"
          style={{ marginHorizontal: 24 }}
          onPress={handleGoBackButton}
        />

        <UserName>Olá, {user?.name}</UserName>
      </Header>

      {!appointments && (
        <List>
          <Description>Meus horários:</Description>
          {appointments.map(({ day, times }) => (
            <ItemCard key={day.toString()}>
              <DateContainer>
                <MaterialCommunityIcons
                  name="calendar-blank"
                  size={24}
                  color="#8739B3"
                />
                <Date>{formatToDayString({ day })}:</Date>
              </DateContainer>

              {times.map((time) => (
                <ItemLine key={time}>
                  <ItemHour>{formatToHour({ time })}</ItemHour>
                  <TouchableOpacity style={{ marginRight: 24 }}>
                    <MaterialIcons name="delete" size={24} color="#CA53D7" />
                  </TouchableOpacity>
                </ItemLine>
              ))}
            </ItemCard>
          ))}
        </List>
      )}

      {appointments && (
        <NoAppointmentsContainer>
          <NoAppointmentsImage source={FrameImg} />
          <NoAppointmentsMainText>
            Ops! Parece que você ainda não agendou nenhum horario
          </NoAppointmentsMainText>
          <NoAppointmentsSmallText>
            Agende seu horário na aba de Horários
          </NoAppointmentsSmallText>
        </NoAppointmentsContainer>
      )}

      <LogoutContainer onPress={handleLogout}>
        <LogoutText>Sair da conta</LogoutText>
      </LogoutContainer>
    </Container>
  );
};

export default UserProfile;
