import '../css/normalize.css';
import '../css/style.css';

import { apiData } from './Data';
import {listeners} from './listener'


listeners()

let icons = {
    icon_01d : "https://img.icons8.com/sf-regular/64/FFFFFF/sun.png",
    icon_01n : "https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/FFFFFF/external-moon-basic-ui-elements-flatart-icons-outline-flatarticons.png",
    icon_02d : "https://img.icons8.com/sf-regular/32/FFFFFF/partly-cloudy-day.png",
    icon_02n : "https://img.icons8.com/sf-regular/48/FFFFFF/partly-cloudy-night.png",
    icon_03d :  "https://img.icons8.com/sf-regular/56/FFFFFF/cloud.png",
    icon_03n :  "https://img.icons8.com/sf-regular/96/FFFFFF/cloud.png",
    icon_04d :  "https://img.icons8.com/sf-regular/96/FFFFFF/clouds.png",
    icon_04n :  "https://img.icons8.com/sf-regular/96/FFFFFF/clouds.png",
    icon_09d :  "https://img.icons8.com/sf-regular/96/FFFFFF/rain.png" ,
    icon_09n :  "https://img.icons8.com/sf-regular/96/FFFFFF/rain.png",
    icon_10d :   "https://img.icons8.com/ios/96/FFFFFF/rain--v1.png",
    icon_10n :   "https://img.icons8.com/ios/96/FFFFFF/rain--v1.png",
    icon_11d :  "https://img.icons8.com/sf-regular/96/FFFFFF/storm.png" ,
    icon_11n :  "https://img.icons8.com/sf-regular/96/FFFFFF/storm.png" ,
    icon_13d :  "https://img.icons8.com/sf-regular/96/FFFFFF/snow.png",
    icon_13n :  "https://img.icons8.com/sf-regular/96/FFFFFF/snow.png",
    icon_50d :  "https://img.icons8.com/ios-glyphs/96/FFFFFF/foggy-night-1.png",
    icon_50n :  "https://img.icons8.com/ios-glyphs/96/FFFFFF/foggy-night-1.png",
}


    // const main = document.querySelector('.main');
    // const leftCntr = document.createElement('div');
    // leftCntr.setAttribute('class','left-cntr');

    //     for (const key of Object.keys(icons)){

    //         const cityWthrIcon = document.createElement('img');
    //         cityWthrIcon.setAttribute('class','city-wthr-icon');
    //         cityWthrIcon.setAttribute('src',`${icons[key]}`);

    //     leftCntr.appendChild(cityWthrIcon);
    //     }
            
             

// main.appendChild(leftCntr)

// export const getTime = (timezone) => {
//     const localTime = new Date().getTime()
//     const localOffset = new Date().getTimezoneOffset() * 60000
//     const currentUtcTime = localOffset + localTime
//     const cityOffset = currentUtcTime + 1000 * timezone
//     const cityTime = new Date(cityOffset).toTimeString().split(' ')
//     return { time: cityTime[0] }
//   }

// async function test (){
    
//     const resopneAir = await fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=20.7503&lon=-156.5003&appid=a6b35cd92afbce9ef82447502bb1f623')
//     const dataair = await resopneAir.json();
    
//     console.log(dataair);
//     return(dataa);
// }
// test()


const localTime = new Date().getTime()
const localOffset = new Date().getTimezoneOffset() * 60000
const currentUtcTime = localOffset + localTime + 86400

let time = new Date(currentUtcTime)
console.log(time);

