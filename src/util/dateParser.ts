import {
  parseISO,
  eachDayOfInterval,
  isSameDay,
  format,
  getDay,
} from "date-fns";
import { ptBR } from "date-fns/locale";

interface GroupByDatesParams {
  data: string[];
}

interface GroupByDatesWithIdParams {
  schedule: { date: string; id: string }[];
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

export interface MappedScheduleWithIdInterface {
  day: Date;
  times: { time: string; id: string }[];
}

const week = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

export function groupByDates({ data }: GroupByDatesParams) {
  if (data.length === 1) {
    return [{ day: parseISO(data[0]), times: [data[0]] }];
  }

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

export function groupByDatesWithId({ schedule }: GroupByDatesWithIdParams) {
  if (schedule.length === 1) {
    return [
      {
        day: parseISO(schedule[0].date),
        times: [{ time: schedule[0].date, id: schedule[0].id }],
      },
    ];
  } else {
    const start = parseISO(schedule[0].date);
    const end = parseISO(schedule[schedule.length - 1].date);

    const days = eachDayOfInterval({ start, end });

    const mappedSchedule: MappedScheduleWithIdInterface[] = days.map((day) => {
      return { day, times: [] };
    });

    mappedSchedule.map(({ day, times }) => {
      schedule.forEach((time) => {
        if (isSameDay(day, parseISO(time.date))) {
          times.push({ time: time.date, id: time.id });
        }
      });
    });

    return mappedSchedule;
  }
}

groupByDatesWithId;

export function formatToDayString({ day }: FormatToDayStringParams) {
  return `${week[getDay(day)]}, ${format(day, "dd/LL", {
    locale: ptBR,
  })}`;
}

export function formatToHour({ time }: FormatToHourParams) {
  return format(parseISO(time), "HH:mm");
}
