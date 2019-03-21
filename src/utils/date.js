export const leadZero = value => (
    value && value.length === 1 ? `0${value}`: value
);

export const isDate = date => {
    return (date instanceof Date) && !isNaN(date.getTime());
};

export const getDateNumber = value => leadZero(`${value}`);
