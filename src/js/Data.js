export const apiData = (()=>{

    async function crutWthrFetch (cityname, unit) {
        const apiKey ='8451ef5d5c10364ca6777b6b4a4ef99f'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}&units=${unit}`, {mode: 'cors'} ) ;
        const crutWthrData = await response.json();
        console.log(crutWthrData);
        const forcastResponse = await fetch (`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${crutWthrData.coord.lat}&lon=${crutWthrData.coord.lon}&cnt={7}&appid=${apiKey}`, {mode: 'cors'})
        const forcastData = await forcastResponse.json();
        console.log(forcastData);

        

        // const getTime = (timezone) => {
        //     const localTime = new Date().getTime()
        //     const localOffset = new Date().getTimezoneOffset() * 60000
        //     const currentUtcTime = localOffset + localTime + 86400
        //     const cityOffset = currentUtcTime + 1000 * timezone
        //     const cityTime = new Date(cityOffset).toTimeString().split(' ')
        //     const cityTime2 = new Date(cityOffset)
        //     return { time: cityTime[0], full:cityTime2 }
        //   }
        //   console.log(getTime(data.timezone));  


        return  crutWthrData;
    }
    
    return {  crutWthrFetch, }

})();
