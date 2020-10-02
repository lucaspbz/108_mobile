import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { format, getDate } from 'date-fns'
import { ptBR } from "date-fns/locale";

import api from "../services/api";
import socket from "../services/socket";

import { groupByDates, MappedScheduleInterface } from "../util/dateParser";
import { Alert } from "react-native";

interface ScheduleContextData {
  availableSchedule: MappedScheduleInterface[];
  toggleSelectedIcon(time: string): void;
  selectedTimes: string[];
  activePeriod: string;
  updateAvailableTimes(): void;
}

const ScheduleContext = createContext<ScheduleContextData>(
  {} as ScheduleContextData
);

const ScheduleProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<MappedScheduleInterface[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [activePeriod, setActivePeriod] = useState('')

  useEffect(() => {
    socket.on("newAppointments", (appointments: string[]) => {
      const groupedSchedule = groupByDates({ data: appointments });
      setData(groupedSchedule);
    });
    updateAvailableTimes();
  }, [socket]);

  const toggleSelectedIcon = useCallback(
    (time: string) => {
      if (selectedTimes.includes(time)) {
        //remove do estado
        const filteredTimes = selectedTimes.filter((selectedTime) => {
          return selectedTime !== time;
        });
        setSelectedTimes(filteredTimes);
      } else {
        //adiciona ao estado
        setSelectedTimes([...selectedTimes, time]);
      }
    },
    [selectedTimes]
  );

  const updateAvailableTimes = useCallback(() => {
    api
      .get("/appointments/available")
      .then(({ data }) => {
        const groupedSchedule = groupByDates({ data: data.availableAppointments });
        setData(groupedSchedule);
        setSelectedTimes([])

        const startDate = new Date(data.period.start)
        const endDate = new Date(data.period.end)

        const formatedPeriod = `${getDate(startDate)} a ${getDate(endDate)} de ${format(endDate, "MMMM 'de' yyyy", { locale: ptBR })}`
        setActivePeriod(formatedPeriod)

      })
      .catch(() => {
        Alert.alert("Something went very wrong!");
      });

    setData(data);
  }, []);
  return (
    <ScheduleContext.Provider
      value={{
        availableSchedule: data,
        toggleSelectedIcon,
        selectedTimes,
        updateAvailableTimes,
        activePeriod
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

function useSchedule(): ScheduleContextData {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error("useSchedule must be used within an ScheduleProvider");
  }

  return context;
}

export { ScheduleProvider, useSchedule };
