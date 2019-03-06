import { checkDate } from './checkDate';

export const countPeriodWeekends = (startDate, endDate) => {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const positiveDirection = startDate.getTime() <= endDate.getTime();

    let weekends = 0;
    let currentDate = new Date(positiveDirection ? startDate : endDate);
    const endTime = (positiveDirection ? endDate : startDate).getTime();

    while(currentDate.getTime() <= endTime) {
        if (checkDate(currentDate)) {
            weekends++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return weekends;
};
