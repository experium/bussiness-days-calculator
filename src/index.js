import { checkDateWeekend } from './utils/date';

export const addWorkingDays = (date, days = 0) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    const positiveDirection = days > 0;
    let resultDate = new Date(date);

    while(days || checkDateWeekend(resultDate)) {
        if (!checkDateWeekend(resultDate)) {
            if (positiveDirection) {
                --days;
            } else {
                ++days;
            }
        }

        resultDate.setDate(resultDate.getDate() + (positiveDirection ? 1 : -1));
    }

    return resultDate;
};
