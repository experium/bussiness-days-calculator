const { convertCSV } = require('../src/utils/convert');

test('should convert csv to json', () => {
    const result = convertCSV('./tests/data/test.csv');

    expect(result).toEqual({
        shorts: {
            '20190222': true,
        },
        weekends: {
            '20190223': true,
            '20190224': true,
        },
    });
});
