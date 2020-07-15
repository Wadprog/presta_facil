import { createStaticRanges } from 'react-date-range';

import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfLast3Month: startOfMonth(addMonths(new Date(), -3)),
  endOfLast3Month: endOfMonth(addMonths(new Date(), -3)),
};

const useStaticRanges = () => {
  return [
    ...createStaticRanges([
      {
        label: 'Current week',
        range: () => ({
          startDate: defineds.startOfWeek,
          endDate: defineds.endOfWeek,
        }),
      },
      {
        label: 'Last Week',
        range: () => ({
          startDate: defineds.startOfLastWeek,
          endDate: defineds.endOfLastWeek,
        }),
      },
      {
        label: 'Current month',
        range: () => ({
          startDate: defineds.startOfMonth,
          endDate: defineds.endOfMonth,
        }),
      },
      {
        label: 'Last 3 month',
        range: () => ({
          startDate: addDays(new Date(), -90),
          endDate: new Date(),
        }),
      },
    ]),
  ];
};

export default useStaticRanges;
