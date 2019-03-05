# Experium deadline calculator

Based on russian weekends calendar from gov.ru


#### `addWorkingsDays(Date, Number) : Date` Function
```javascript

import { addWorkingsDays } from 'experium-deadline-calculator';

const nextDeadlineWorkingDate = addWorkingsDays(new Date('2019-04-30'), 2);
// Date('2019-05-07')
```

#### `checkDate(Date) : Boolean` Function
```javascript

import { checkDate } from 'experium-deadline-calculator';

const isWeekend = checkDate(new Date('2019-05-09'));
// true
```
