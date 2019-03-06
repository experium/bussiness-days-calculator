import { checkDate } from './checkDate';

export const addWorkingDays = (date, days = 0) => {
    const positiveDirection = days > 0;
    let resultDate = new Date(date);

    while(days || checkDate(resultDate)) {
        if (!checkDate(resultDate)) {
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
