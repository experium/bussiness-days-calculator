const { checkDate } = require('../src/index');

test('should detect weekend', () => {
    const result = checkDate(new Date('2018-05-09'));

    expect(result).toEqual(true);
});

test('should throw error', () => {
    const result = checkDate('');

    expect(result.getTime()).toBeNaN();
});
