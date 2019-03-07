# Business days calculator

[![Build Status](https://travis-ci.com/experium/bussiness-days-calculator.svg?branch=master)](https://travis-ci.com/experium/bussiness-days-calculator)

Based on russian weekends calendar from gov.ru

## Install

Install `@experium/business-days-calculator` using `npm` or `yarn`.

```
yarn add @experium/business-days-calculator
```

## Usage

### `addWorkingsDays(Date, Number) : Date` Function
```javascript

import { addWorkingsDays } from '@experium/business-days-calculator';

const nextDeadlineWorkingDate = addWorkingsDays(new Date('2019-04-30'), 2);
// Date('2019-05-07')
```

### `checkDate(Date) : Boolean` Function
```javascript

import { checkDate } from '@experium/business-days-calculator';

const isWeekend = checkDate(new Date('2019-05-09'));
// true
```

### `countPeriodWeekends(Date, Date) : Number` Function
```javascript

import { countPeriodWeekends } from '@experium/business-days-calculator';

const weekendsCount = countPeriodWeekends(new Date('2019-05-01'), new Date('2019-05-09'));
// 6
```
