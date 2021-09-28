const { countPeriodWeekends } = require('../src/index');

test('should detect weekend', () => {
    const result = countPeriodWeekends(new Date('2019-05-01'), new Date('2019-05-09'));
    expect(result).toEqual(6);

    const result22 = countPeriodWeekends(new Date('2022-05-02'), new Date('2022-05-15'));
    expect(result22).toEqual(8);
});

test('should throw error', () => {
    const result = countPeriodWeekends('', '232');

    expect(result).toBeNaN();
});
