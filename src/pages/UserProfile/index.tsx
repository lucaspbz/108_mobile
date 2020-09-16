import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Modal from "../../components/Modal";

import FrameImg from "../../assets/Frame.png";

import { useAuth } from "../../hooks/auth";

import {
  groupByDatesWithId,
  MappedScheduleWithIdInterface,
  formatToDayString,
  formatToHour,
} from "../../util/dateParser";

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
} from "./styles";
import api from "../../services/api";

const UserProfile: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeToBeDeleted, setTimeToBeDeleted] = useState(
    {} as { time: string; id: string }
  );
  const [appointments, setAppointments] = useState<
    MappedScheduleWithIdInterface[] | null
  >([]);
  const { user, signOut } = useAuth();
  const navigate = useNavigation();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = useCallback(() => {
    api.get(`/users/${user?.id}`).then(({ data }) => {
      try {
        const filteredAppointments = data.appointments.map(
          (item: { date: string; id: string }) => ({
            date: item.date,
            id: item.id,
          })
        );

        const appointmentsByDay = groupByDatesWithId({
          schedule: filteredAppointments,
        });
        setAppointments(appointmentsByDay);
      } catch (error) {
        setAppointments(null);
      }
    });
  }, [user]);

  function handleGoBackButton() {
    navigate.goBack();
  }

  const handleOpenDeleteModal = useCallback(
    (time: string, id: string) => {
      setTimeToBeDeleted({ time, id });
      setModalVisible(true);
    },
    [timeToBeDeleted]
  );

  const handleDeleteTime = useCallback(
    (id: string) => {
      api
        .delete(`/appointments/${id}`)
        .then(() => {
          loadUserData();
          setModalVisible(false);
        })
        .catch(() => {
          setModalVisible(false);
          Alert.alert("Parece que algo deu errado :(");
        });
    },
    [timeToBeDeleted]
  );

  const handleLogout = useCallback(() => {
    signOut();
  }, []);

  return (
    <Container>
      {modalVisible && (
        <Modal
          time={timeToBeDeleted.time}
          onConfirm={() => {
            handleDeleteTime(timeToBeDeleted.id);
          }}
          onClose={() => {
            setModalVisible(false);
          }}
        />
      )}

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

      {appointments && (
        <List>
          <Description>Meus horários:</Description>
          {appointments.map(({ day, times }) => {
            if (times.length > 0) {
              return (
                <ItemCard key={day.toString()}>
                  <DateContainer>
                    <MaterialCommunityIcons
                      name="calendar-blank"
                      size={24}
                      color="#8739B3"
                    />
                    <Date>{formatToDayString({ day })}:</Date>
                  </DateContainer>

                  {times.map(({ time, id }) => (
                    <ItemLine key={id}>
                      <ItemHour>{formatToHour({ time })}</ItemHour>
                      <TouchableOpacity
                        style={{ marginRight: 24 }}
                        onPress={() => {
                          handleOpenDeleteModal(time, id);
                        }}
                      >
                        <MaterialIcons
                          name="delete"
                          size={24}
                          color="#CA53D7"
                        />
                      </TouchableOpacity>
                    </ItemLine>
                  ))}
                </ItemCard>
              );
            }
          })}
        </List>
      )}

      {!appointments && (
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
