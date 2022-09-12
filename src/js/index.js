import '../css/normalize.css';
import '../css/style.css';

import { apiData } from './Data';
import {listeners} from './listener'


listeners()
// let t2 = new Date.UTC()
// console.log(t2);

// export const getTime = (timezone) => {
//     const localTime = new Date().getTime()
//     const localOffset = new Date().getTimezoneOffset() * 60000
//     const currentUtcTime = localOffset + localTime
//     const cityOffset = currentUtcTime + 1000 * timezone
//     const cityTime = new Date(cityOffset).toTimeString().split(' ')
//     return { time: cityTime[0] }
//   }
  