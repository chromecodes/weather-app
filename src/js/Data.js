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
            const currentUtcTime = localOffset + localTime 
            const cityOffset = currentUtcTime + 1000 * timezone
            const cityTime = new Date(cityOffset).toString().split(' ')
            const cityTime2 = cityTime[4].split(':')
            const dateData = [cityTime, cityTime2]
            return dateData;
          }
        return  [getTime(crutWthrData.timezone) ,crutWthrData, forcastData ,unit];
    }

    const getTimeCovert = function (time, timezone){
      const localOffset = new Date().getTimezoneOffset() * 60000
      const cityOffset = time * 1000 + timezone * 1000 + localOffset
      const requiredTime  = new Date(cityOffset).toTimeString().slice(0,5);
      return requiredTime;
    }

    const getDate = function (time){
      const localOffset = new Date().getTimezoneOffset() * 60000
      const cityOffset = time * 1000 + localOffset
      const requiredDate  = new Date(cityOffset).toDateString().slice(8,11)
      return requiredDate;
    }

    const getDay = function (time){
      const localOffset = new Date().getTimezoneOffset() * 60000
      const cityOffset = time * 1000 + localOffset
      const requiredDay  = new Date(cityOffset).toDateString().slice(0,3)
      return requiredDay;
    }


    const intialCapitlize = function (string){
      let intial = string.slice(0,1).toUpperCase()+string.substr(1);
      return intial
    }

    const checkWindStatus= function(speed,unit){
      if(unit === "imperial"){
          if(speed < 1){
            return 'Calm'
          } else if ((speed >= 1) && (speed <= 3)){
            return 'Light air'
          } else if ((speed >= 4) && (speed <= 7)){
            return 'Light breeze'
          } else if ((speed >= 8) && (speed <= 12)){
            return 'Gentle breeze'
          } else if ((speed >= 13) && (speed <= 18)){
            return 'Moderate breeze'
          } else if ((speed >= 19) && (speed <= 24)){
            return 'Fresh breeze'
          } else if ((speed >= 25) && (speed <= 31)){
            return 'Strong breeze'
          } else if ((speed >= 32) && (speed <= 38)){
            return 'Moderate gale'
          } else if ((speed >= 39) && (speed <= 46)){
            return 'Fresh gale'
          } else if ((speed >= 47) && (speed <= 54)){
            return 'Strong gale'
          } else if ((speed >= 55) && (speed <= 63)){
            return 'Storm'
          } else if ((speed >= 64) && (speed <= 73)){
            return 'Violent storm'
          }  else if ((speed > 73)){
            return 'Hurricane'
          } 
      } else {
        if(speed < 0){
          return 'Calm'
        } else if ((speed >= 0.5) && (speed < 2)){
          return 'Light air'
        } else if ((speed >= 2) && (speed <= 3)){
          return 'Light breeze'
        } else if ((speed >= 3.5) && (speed <= 5)){
          return 'Gentle breeze'
        } else if ((speed >= 5.5) && (speed <= 8)){
          return 'Moderate breeze'
        } else if ((speed >= 8.5) && (speed <= 10.5)){
          return 'Fresh breeze'
        } else if ((speed >= 11) && (speed <= 13.5)){
          return 'Strong breeze'
        } else if ((speed >= 14) && (speed <= 16.5)){
          return 'Moderate gale'
        } else if ((speed >= 17) && (speed <= 20)){
          return 'Fresh gale'
        } else if ((speed >= 20.5) && (speed <= 23.5)){
          return 'Strong gale'
        } else if ((speed >= 24) && (speed <= 27.5)){
          return 'Storm'
        } else if ((speed >= 28) && (speed <= 31.5)){
          return 'Violent storm'
        }  else if ((speed > 32)){
          return 'Hurricane'
        } 
    }
  }

    let iSize = '60', iColor = 'FFFFFF'
    
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

    return {  crutWthrFetch, getTimeCovert,getDate, getDay, intialCapitlize, checkWindStatus, icons }

})();
