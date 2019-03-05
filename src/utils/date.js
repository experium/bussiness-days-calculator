import PadStart from 'string.prototype.padstart';

import { days } from '../data/days';

PadStart.shim();

export const isDate = date => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }
};

const getNumber = value => `${value}`.padStart(2, '0');

export const checkDateWeekend = date => {
    isDate(date);

    const dateString = (
        `${date.getFullYear()}${getNumber(date.getMonth() + 1)}${getNumber(date.getDate())}`
    );

    return !!days.weekends[dateString];
};
