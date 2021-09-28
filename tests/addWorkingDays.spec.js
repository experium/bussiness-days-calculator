const { addWorkingDays } = require('../src/index');

test('should add year before', () => {
    const result = addWorkingDays(new Date('2018-12-31'), 1);
    expect(result).toEqual(new Date('2019-01-10'));

    const result22 = addWorkingDays(new Date('2021-12-31'), 1);
    expect(result22).toEqual(new Date('2022-01-10'));
});

test('should add before long weekend', () => {
    const result = addWorkingDays(new Date('2019-04-30'), 1);
    expect(result).toEqual(new Date('2019-05-06'));

    const result22 = addWorkingDays(new Date('2022-04-29'), 1);
    expect(result22).toEqual(new Date('2022-05-04'));
});

test('should add with casual weekend', () => {
    const result = addWorkingDays(new Date('2019-02-08'), 1);
    expect(result).toEqual(new Date('2019-02-11'));

    const result22 = addWorkingDays(new Date('2022-05-20'), 1);
    expect(result22).toEqual(new Date('2022-05-23'));
});

test('should add without weekend', () => {
    const result = addWorkingDays(new Date('2019-05-22'), 1);
    expect(result).toEqual(new Date('2019-05-23'));

    const result22 = addWorkingDays(new Date('2022-05-16'), 1);
    expect(result22).toEqual(new Date('2022-05-17'));
});

test('should add long period', () => {
    const result = addWorkingDays(new Date('2019-04-30'), 4);
    expect(result).toEqual(new Date('2019-05-13'));

    const result22 = addWorkingDays(new Date('2022-04-29'), 4);
    expect(result22).toEqual(new Date('2022-05-11'));
});

test('should add reverse weekend', () => {
    const result = addWorkingDays(new Date('2019-05-06'), -1);
    expect(result).toEqual(new Date('2019-04-30'));

    const result22 = addWorkingDays(new Date('2022-03-09'), -1);
    expect(result22).toEqual(new Date('2022-03-05'));
});

test('should throw error', () => {
    const result = addWorkingDays('', 1);

    expect(result.getTime()).toBeNaN();
});
