import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import api from '../services/api';
import { groupByDates, MappedScheduleInterface } from '../util/dateParser';

interface ScheduleContextData {
  availableSchedule: MappedScheduleInterface[];
  toggleSelectedIcon(time: string): void;
  selectedTimes: string[];
}

const ScheduleContext = createContext<ScheduleContextData>(
  {} as ScheduleContextData
);

const ScheduleProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<MappedScheduleInterface[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/appointments/available').then(({ data }) => {
      const groupedSchedule = groupByDates({ data });
      setData(groupedSchedule);
    });

    setData(data);
    setLoading(false);
  }, []);

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
  return (
    <ScheduleContext.Provider
      value={{ availableSchedule: data, toggleSelectedIcon, selectedTimes }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

function useSchedule(): ScheduleContextData {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error('useSchedule must be used within an ScheduleProvider');
  }

  return context;
}

export { ScheduleProvider, useSchedule };
