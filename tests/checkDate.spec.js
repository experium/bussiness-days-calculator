const { checkDate } = require('../src/index');

test('should detect weekend', () => {
    const result = checkDate(new Date('2018-05-09'));

    expect(result).toEqual(true);
});

test('should trow error', (done) => {
    try {
        const result = checkDate('');
    } catch (e) {
        return done();
    }

    done('No error');
});
