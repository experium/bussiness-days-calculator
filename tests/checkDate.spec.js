const { checkDate } = require('../src/index');

test('should detect weekend', () => {
    const result = checkDate(new Date('2018-05-09'));
    expect(result).toEqual(true);

    const result22 = checkDate(new Date('2022-05-10'));
    expect(result22).toEqual(true);

    const resultFalse22 = checkDate(new Date('2022-05-06'));
    expect(resultFalse22).toEqual(false);
});

test('should throw error', () => {
    const result = checkDate('');

    expect(result.getTime()).toBeNaN();
});
