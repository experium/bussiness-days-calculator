# Experium deadline calculator

Based on russian weekends calendar from gov.ru

## Usage

### `addWorkingsDays(Date, Number) : Date` Function
```javascript

import { addWorkingsDays } from 'experium-deadline-calculator';

const nextDeadlineWorkingDate = addWorkingsDays(new Date('2019-04-30'), 2);
// Date('2019-05-07')
```

### `checkDate(Date) : Boolean` Function
```javascript

import { checkDate } from 'experium-deadline-calculator';

const isWeekend = checkDate(new Date('2019-05-09'));
// true
```

### `coutPeriodWeekends(Date, Date) : Number` Function
```javascript

import { coutPeriodWeekends } from 'experium-deadline-calculator';

const weekendsCount = coutPeriodWeekends(new Date('2019-05-01'), new Date('2019-05-09'));
// 6
```
