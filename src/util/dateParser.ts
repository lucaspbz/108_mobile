import { parseISO, eachDayOfInterval, isSameDay, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface GroupByDatesParams {
  data: string[];
}

interface FormatToDayStringParams {
  day: Date;
}

interface FormatToHourParams {
  time: string;
}

export interface MappedScheduleInterface {
  day: Date;
  times: string[];
}

export function groupByDates({ data }: GroupByDatesParams) {
  const start = parseISO(data[0]);
  const end = parseISO(data[data.length - 1]);

  const days = eachDayOfInterval({ start, end });

  const mappedSchedule: MappedScheduleInterface[] = days.map((day) => {
    return { day, times: [] };
  });

  mappedSchedule.map(({ day, times }) => {
    data.forEach((time) => {
      if (isSameDay(day, parseISO(time))) {
        times.push(time);
      }
    });
  });

  return mappedSchedule;
}

export function formatToDayString({ day }: FormatToDayStringParams) {
  return format(day, 'eeee, dd/LL', {
    locale: ptBR,
  });
}

export function formatToHour({ time }: FormatToHourParams) {
  return format(parseISO(time), 'HH:mm');
}
