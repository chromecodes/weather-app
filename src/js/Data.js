export const apiData = (()=>{

    async function crutWthrFetch (cityname, unit) {
        const apiKey ='a6b35cd92afbce9ef82447502bb1f623'
        const crutWthrResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}&units=${unit}`,
            {mode: 'cors'} ) ;
        const crutWthrData = await crutWthrResponse.json();
        const forcastResponse = await fetch(
           ` https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apiKey}&units=${unit}`,
            { mode: 'cors' },
          );
        const forcastData = await forcastResponse.json();
        
        const getTime = (timezone) => {
            const localTime = new Date().getTime()
            const localOffset = new Date().getTimezoneOffset() * 60000
            const currentUtcTime = localOffset + localTime + 86400
            const cityOffset = currentUtcTime + 1000 * timezone
            const cityTime = new Date(cityOffset).toString().split(' ')
            const cityTime2 = cityTime[4].split(':')
            const dateData = [cityTime, cityTime2]
            return dateData;
          }
        return  [getTime(crutWthrData.timezone) ,crutWthrData, forcastData];
    }

    const getTimeCovert = function (time){
      const localTime = new Date().getTime()
      const localOffset = new Date().getTimezoneOffset() * 60000
      const currentUtcTime = localOffset + localTime + 86400
      const offsetTime = currentUtcTime + time

      let timeSR = new Date(offsetTime)
      return timeSR;
    }

    let iSize = '64', iColor = 'FFFFFF'
    
    const icons = {

      icon_01d : `https://img.icons8.com/sf-regular/${iSize}/${iColor}/sun.png`,
      icon_01n : `https://img.icons8.com/external-flatart-icons-outline-flatarticons/${iSize}/${iColor}/external-moon-basic-ui-elements-flatart-icons-outline-flatarticons.png`,
      icon_02d : `https://img.icons8.com/sf-regular/${iSize}/${iColor}/partly-cloudy-day.png`,
      icon_02n : `https://img.icons8.com/sf-regular/${iSize}/${iColor}/partly-cloudy-night.png`,
      icon_03d :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/cloud.png`,
      icon_03n :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/cloud.png`,
      icon_04d :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/clouds.png`,
      icon_04n :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/clouds.png`,
      icon_09d :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/rain.png` ,
      icon_09n :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/rain.png`,
      icon_10d :   `https://img.icons8.com/ios/${iSize}/${iColor}/rain--v1.png`,
      icon_10n :   `https://img.icons8.com/ios/${iSize}/${iColor}/rain--v1.png`,
      icon_11d :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/storm.png` ,
      icon_11n :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/storm.png` ,
      icon_13d :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/snow.png`,
      icon_13n :  `https://img.icons8.com/sf-regular/${iSize}/${iColor}/snow.png`,
      icon_50d :  `https://img.icons8.com/ios-glyphs/${iSize}/${iColor}/foggy-night-1.png`,
      icon_50n :  `https://img.icons8.com/ios-glyphs/${iSize}/${iColor}/foggy-night-1.png`,
  }

    return {  crutWthrFetch, getTimeCovert,icons }

})();
