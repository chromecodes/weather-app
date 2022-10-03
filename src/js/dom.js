import { apiData } from "./Data";
export const createDom =(() => {

    const crutWthr = (data)=>{    

        removeLoading();
        
        const mainCnt = document.querySelector('.main-cnt');
        
        if(data[0] === 'error'){

            const errorCnt = document.createElement('div');
            errorCnt.setAttribute('class','error-cntr');

                const errorText = document.createElement('div');
                errorText.setAttribute('class','error-text');
                errorText.textContent = "Location not found"

            errorCnt.appendChild(errorText);

        mainCnt.appendChild(errorCnt);

        } else {

            const main = document.createElement('div');
            main.setAttribute('class','main');

                const leftCntr = document.createElement('div');
                leftCntr.setAttribute('class','left-cntr');

                    const leftSet1 = document.createElement('div');
                    leftSet1.setAttribute('class','left-set1');

                        const cityName = document.createElement('div');
                        cityName.setAttribute('class','city-name');
                        cityName.textContent = data[1].name+ ', '+data[1].sys.country;

                    leftSet1.appendChild(cityName);

                    const leftSet1Sub = document.createElement('div');
                        leftSet1Sub.setAttribute('class','left-set1-sub');

                            const cityDayDate = document.createElement('div');
                            cityDayDate.setAttribute('class','city-dayDate');
                            cityDayDate.textContent = data[0][0][0]+" "+data[0][0][2]+" "+data[0][0][1];

                        leftSet1Sub.appendChild(cityDayDate);

                            const cityTime = document.createElement('div');
                            cityTime.setAttribute('class','city-time');
                            cityTime.textContent =  data[0][1][0]+":"+ data[0][1][1];

                        leftSet1Sub.appendChild(cityTime);
                    leftSet1.appendChild(leftSet1Sub);


                leftCntr.appendChild(leftSet1);

                    const leftSet2 = document.createElement('div');
                    leftSet2.setAttribute('class','left-set2');

                        const leftSet2Sub = document.createElement('div');
                        leftSet2Sub.setAttribute('class','left-set2-sub');

                            const cityWthrIcon = document.createElement('img');
                            cityWthrIcon.setAttribute('class','city-wthr-icon');
                            cityWthrIcon.setAttribute('src',`${apiData.icons[`icon_${data[1].weather[0].icon}`]}`);

                        leftSet2Sub.appendChild(cityWthrIcon);

                            const cityWthrTemp = document.createElement('div');
                            cityWthrTemp.setAttribute('class','city-wthr-temp');
                            if(data[3]==="imperial") {
                                cityWthrTemp.textContent = Math.round(data[1].main.temp)+" °F";
                            } else {
                                cityWthrTemp.textContent =  Math.round(data[1].main.temp)+" °C";
                            }   

                        leftSet2Sub.appendChild(cityWthrTemp);

                    leftSet2.appendChild(leftSet2Sub);

                        const cityWthrStus = document.createElement('div');
                        cityWthrStus.setAttribute('class','city-wthr-stus');
                        cityWthrStus.textContent =apiData.intialCapitlize(data[1].weather[0].description);

                    leftSet2.appendChild(cityWthrStus);

                        const cityWthrFeel = document.createElement('div');
                        cityWthrFeel.setAttribute('class','city-wthr-feel');
                        cityWthrFeel.textContent = `Feels like ${Math.round(data[1].main.temp)}°`

                    leftSet2.appendChild(cityWthrFeel);

                        const cityWthrAir = document.createElement('div');
                        cityWthrAir.setAttribute('class','city-wthr-air');
                        
                        cityWthrAir.textContent = apiData.checkWindStatus(data[1].wind.speed, data[3]);

                    leftSet2.appendChild(cityWthrAir);

                leftCntr.appendChild(leftSet2);


            main.appendChild(leftCntr);


                const rightCntr = document.createElement('div');
                rightCntr.setAttribute('class','right-cntr');

                    const wind = document.createElement('div');
                    wind.setAttribute('class','wind-speed');

                        const windCnt = document.createElement('div');
                        windCnt.setAttribute('class','wind-speed-cnt');

                            const windTitle = document.createElement('div');
                            windTitle.setAttribute('class','wind-speed-title');
                            windTitle.textContent ='Wind';
                    
                        windCnt.appendChild(windTitle);

                            const windValue = document.createElement('div');
                            windValue.setAttribute('class','wind-speed-value');
                            if(data[3]==="imperial") {
                                windValue.textContent = data[1].wind.speed+' mph';
                            } else {
                                windValue.textContent = data[1].wind.speed+' m/s';
                            }

                        windCnt.appendChild(windValue);
                        
                    wind.appendChild(windCnt);
                    
                rightCntr.appendChild(wind);

                    const humidity = document.createElement('div');
                    humidity.setAttribute('class','humidity');
                    
                        const humidityCnt = document.createElement('div');
                        humidityCnt.setAttribute('class','humidity-cnt');

                            const humidityTitle = document.createElement('div');
                            humidityTitle.setAttribute('class','humidity-title');
                            humidityTitle.textContent ='Humidity';
                    
                        humidityCnt.appendChild(humidityTitle);

                            const humidityValue = document.createElement('div');
                            humidityValue.setAttribute('class','humidity-value');
                            humidityValue.textContent =  data[1].main.humidity+' %'
                        humidityCnt.appendChild(humidityValue);
                    
                    humidity.appendChild(humidityCnt);

                rightCntr.appendChild(humidity);

                    const visibility = document.createElement('div');
                    visibility.setAttribute('class','visibility');

                        const visibilityCnt = document.createElement('div');
                        visibilityCnt.setAttribute('class','visibility-cnt');

                            const visibilityTitle = document.createElement('div');
                            visibilityTitle.setAttribute('class','visibility-title');
                            visibilityTitle.textContent ='Visibility';
                    
                        visibilityCnt.appendChild(visibilityTitle);

                            const visibilityValue = document.createElement('div');
                            visibilityValue.setAttribute('class','visibility-value');
                            visibilityValue.textContent =  data[1].visibility/1000+' km'
                        visibilityCnt.appendChild(visibilityValue);

                    visibility.appendChild(visibilityCnt);

                rightCntr.appendChild(visibility);

                    const cloudiness = document.createElement('div');
                    cloudiness.setAttribute('class','cloudiness');


                        const cloudinessCnt = document.createElement('div');
                        cloudinessCnt.setAttribute('class','cloudiness-cnt');

                            const cloudinessTitle = document.createElement('div');
                            cloudinessTitle.setAttribute('class','cloudiness-title');
                            cloudinessTitle.textContent ='Cloudiness';
                    
                        cloudinessCnt.appendChild(cloudinessTitle);

                            const cloudinessValue = document.createElement('div');
                            cloudinessValue.setAttribute('class','cloudiness-value');
                            cloudinessValue.textContent =  data[1].clouds.all+' %'
                        cloudinessCnt.appendChild(cloudinessValue);

                    cloudiness.appendChild(cloudinessCnt);

                rightCntr.appendChild(cloudiness);

                        const sunrise = document.createElement('div');
                        sunrise.setAttribute('class','sunrise');

                            const sunriseCnt = document.createElement('div');
                            sunriseCnt.setAttribute('class','sunrise-cnt');

                                const sunriseTitle = document.createElement('div');
                                sunriseTitle.setAttribute('class','sunrise-title');
                                sunriseTitle.textContent ='Sunrise';
                        
                            sunriseCnt.appendChild(sunriseTitle);

                                const sunriseValue = document.createElement('div');
                                sunriseValue.setAttribute('class','sunrise-value');
                                sunriseValue.textContent =  apiData.getTimeCovert(data[1].sys.sunrise,data[1].timezone);
                            sunriseCnt.appendChild(sunriseValue);

                        sunrise.appendChild(sunriseCnt);

                    rightCntr.appendChild(sunrise);

                        const sunset = document.createElement('div');
                        sunset.setAttribute('class','sunset');

                            const sunsetCnt = document.createElement('div');
                            sunsetCnt.setAttribute('class','sunset-cnt');

                                const sunsetTitle = document.createElement('div');
                                sunsetTitle.setAttribute('class','sunset-title');
                                sunsetTitle.textContent ='sunset';
                        
                            sunsetCnt.appendChild(sunsetTitle);

                                const sunsetValue = document.createElement('div');
                                sunsetValue.setAttribute('class','sunset-value');
                                sunsetValue.textContent = apiData.getTimeCovert(data[1].sys.sunset, data[1].timezone);
                            sunsetCnt.appendChild(sunsetValue);

                        sunset.appendChild(sunsetCnt);

                rightCntr.appendChild(sunset);

            main.appendChild(rightCntr);
                
                const bottomCntr =  document.createElement('div');
                bottomCntr.setAttribute('class','bottom-cntr');

                    const forcastCntr = document.createElement('div');
                    forcastCntr.setAttribute('class','forcast-cntr');
                    forcastCntr.textContent = 'Forcast';

                bottomCntr.appendChild(forcastCntr);
                    
                const cardsCntr = document.createElement('div');
                cardsCntr.setAttribute('class','cards-cntr');

                    for( let i = 8; i < 40; i+= 8) {

                        const cardCntr = document.createElement('div');
                        cardCntr.setAttribute('class','card-cntr');
        
                            const topSec = document.createElement('div');
                            topSec.setAttribute('class','card-top');
        
                                const cardDate = document.createElement('div');
                                cardDate.setAttribute('class','card-date');
                                cardDate.textContent =  apiData.getDate(data[2].list[i].dt);
                
                            topSec.appendChild(cardDate);
        
                                const cardDay = document.createElement('div');
                                cardDay.setAttribute('class','card-day');
                                cardDay.textContent = apiData.getDay(data[2].list[i].dt)
        
                            topSec.appendChild(cardDay);
        
                        cardCntr.appendChild(topSec);
        
        
                            const midSec = document.createElement('div');
                            midSec.setAttribute('class','card-mid');
        
                                const cardWthr = document.createElement('img');
                                cardWthr.setAttribute('class','city-wthr');
                                cardWthr.setAttribute('src',`${apiData.icons[`icon_${data[2].list[i].weather[0].icon}`]}`);
        
                            midSec.appendChild(cardWthr);
        
                                const cardTemp = document.createElement('div');
                                cardTemp.setAttribute('class','card-temp');
                                if(data[3]==="imperial") {
                                    cardTemp.textContent = Math.round(data[2].list[i].main.temp)+" °F";
                                } else {
                                    cardTemp.textContent =  Math.round(data[2].list[i].main.temp)+" °C";
                                }  
        
                            midSec.appendChild(cardTemp);
        
                        cardCntr.appendChild(midSec);
        
                
                            const botmSec = document.createElement('div');
                            botmSec.setAttribute('class','card-botm');
        
                                const cardDesp = document.createElement('div');
                                cardDesp.setAttribute('class','card-desp');
                                cardDesp.textContent = apiData.intialCapitlize(data[2].list[i].weather[0].description)
        
                            botmSec.appendChild(cardDesp);
        
                        cardCntr.appendChild(botmSec);

                    cardsCntr.appendChild(cardCntr);                    
                    }
                    
                bottomCntr.appendChild(cardsCntr);

            main.appendChild(bottomCntr);

        mainCnt.appendChild(main);
        }
    }

    const addLoading = ()=>{

        const mainCnt = document.querySelector('.main-cnt');

            const loadCnt = document.createElement('div');
            loadCnt.setAttribute('class','load-cntr');

                const loading = document.createElement('img');
                loading.setAttribute('class','loading');
                loading.setAttribute('src','Gif/loading2.gif');

            loadCnt.appendChild(loading);

        mainCnt.appendChild(loadCnt);
    }

    const removeLoading = ()=>{

        const mainCnt = document.querySelector('.main-cnt');
        mainCnt.removeChild(mainCnt.firstChild)

    }

   return { crutWthr,addLoading,removeLoading }

})();
