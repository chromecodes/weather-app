export const apiData = (()=>{

    async function crutWthrFetch (cityname, unit) {
        console.log(3);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=8451ef5d5c10364ca6777b6b4a4ef99f&units=${unit}`, {mode: 'cors'} ) ;
        const crutWthrData = await response.json();
        return  crutWthrData;
    }
    
    return {  crutWthrFetch, }

})();
