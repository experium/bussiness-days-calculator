import PadStart from 'string.prototype.padstart';

PadStart.shim();

export const isDate = date => {
    return (date instanceof Date) && !isNaN(date.getTime());
};

export const getDateNumber = value => `${value}`.padStart(2, '0');
