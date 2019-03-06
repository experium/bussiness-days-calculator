import { isDate } from './utils/date';
import { checkDate as checkDateHandler } from './date/checkDate';
import { addWorkingDays as addWorkingDaysHandler } from './date/addWorkingDays';
import { countPeriodWeekends as countPeriodWeekendsHandler } from './date/countPeriodWeekends';

export const checkDate = function(date) {
    if (!isDate(date)) {
        return new Date('Invalide date');
    }

    return checkDateHandler(date);
};

export const addWorkingDays = function(date, count) {
    if (!isDate(date)) {
        return new Date('Invalide date');
    }

    return addWorkingDaysHandler(date, count);
};

export const countPeriodWeekends = function(startDate, endDate) {
    if (!isDate(startDate) || !isDate(endDate)) {
        return (new Date('Invalide date')).getTime();
    }

    return countPeriodWeekendsHandler(startDate, endDate);
};
