const { convertCSV } = require('../src/utils/convert');

test('should convert csv to json', () => {
    const result = convertCSV('./tests/data/test.csv');

    expect(result).toEqual({
        shorts: {
            '20190222': true,
            // 2022
            "20220222": true,
        },
        weekends: {
            '20190223': true,
            '20190224': true,
            // 2022
            "20220223": true,
            "20220501": true,
            "20220502": true,
            "20220503": true,
            "20220507": true,
            "20220508": true,
            "20220509": true,
            "20220510": true,
            "20220514": true,
            "20220515": true,
            "20220521": true,
            "20220522": true,
            "20220528": true,
            "20220529": true,
        },
    });
});
