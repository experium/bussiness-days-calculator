import { checkDateWeekend } from './utils/date';

export const addWorkingDays = (date, days) => {
    let resultDate = new Date(date);

    while(days || checkDateWeekend(resultDate)) {
        if (!checkDateWeekend(resultDate)) {
            --days;
        }

        resultDate.setDate(resultDate.getDate() + 1);
    }

    return resultDate;
};
