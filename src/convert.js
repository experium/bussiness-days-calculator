import path from 'path';
import fs from 'fs';

import { convertCSV } from './utils/convert';

const dataFilePath = path.resolve(__dirname, 'data/days.csv');
const json = JSON.stringify(convertCSV(dataFilePath));

fs.writeFileSync(path.resolve(__dirname, 'data/days.json'), json);
fs.writeFileSync(path.resolve(__dirname, 'data/days.js'), `
    export const days = ${json};
`);
