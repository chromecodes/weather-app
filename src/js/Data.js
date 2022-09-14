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
    
    return {  crutWthrFetch, }

})();
