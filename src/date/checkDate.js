import { days } from '../data/days';
import { getDateNumber } from '../utils/date';

export const checkDate = date => {
    const dateString = (
        `${date.getFullYear()}${getDateNumber(date.getMonth() + 1)}${getDateNumber(date.getDate())}`
    );

    return !!days.weekends[dateString];
};
