import fs from 'fs';
import PadStart from 'string.prototype.padstart';
import Parser from 'csv-parse/lib/sync';

PadStart.shim();

const getNumber = value => `${value}`.padStart(2, '0');
const setWeekendDays = (weekends, shorts, year, month, daysString) => {
    const getDate = value => (
        `${year}${getNumber(month)}${getNumber(value)}`
    );

    const days = daysString.split(',');
    days.forEach(value => {
        if (!value) {
            return;
        }

        if (value.indexOf('*') + 1) {
            shorts[getDate(Number(value.replace('*', '')))] = true;

            return;
        }

        weekends[getDate(Number(value.replace('+', '')))] = true;
    });

    return {
        weekends,
        shorts,
    };
};

export const convertCSV = (file) => {
    const csvData = fs.readFileSync(file);

    const rows = Parser(csvData, {
        columns: [
            'year',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            'totalDays',
            'totalWeekendDays',
            'total40Hours',
            'total36Hours',
            'total24Hours',
        ],
        skip_empty_lines: true,
    }).slice(1);

    const json = {
        weekends: {},
        shorts: {},
    };

    rows.forEach(yearValues => {
        for(var i = 1; i <= 12; i++) {
            setWeekendDays(json.weekends, json.shorts, yearValues.year, i, yearValues[i]);
        }
    });

    return json;
};

