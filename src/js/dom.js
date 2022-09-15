import { apiData } from "./Data";
export const createDom =(() => {

    const crutWthr = (data)=>{         

        console.log(data);

        const main = document.querySelector('.main');
            const leftCntr = document.createElement('div');
            leftCntr.setAttribute('class','left-cntr');

                const cityName = document.createElement('div');
                cityName.setAttribute('class','city-name');
                cityName.textContent = data[1].name+ ', '+data[1].sys.country;

            leftCntr.appendChild(cityName);

                const cityDay = document.createElement('div');
                cityDay.setAttribute('class','city-day');
                cityDay.textContent = data[0][0][0];

            leftCntr.appendChild(cityDay);

                const cityDate = document.createElement('div');
                cityDate.setAttribute('class','city-date');
                cityDate.textContent =  data[0][0][2]+" "+data[0][0][1];

            leftCntr.appendChild(cityDate);

                const cityTime = document.createElement('div');
                cityTime.setAttribute('class','city-time');
                cityTime.textContent =  data[0][1][0]+":"+ data[0][1][1];

            leftCntr.appendChild(cityTime);

                const cityWthrIcon = document.createElement('img');
                cityWthrIcon.setAttribute('class','city-wthr-icon');
                cityWthrIcon.setAttribute('src',`${apiData.icons[`icon_${data[1].weather[0].icon}`]}`);

            leftCntr.appendChild(cityWthrIcon);

                const cityWthrTemp = document.createElement('div');
                cityWthrTemp.setAttribute('class','city-wthr-temp');
                cityWthrTemp.textContent = data[1].main.temp;

            leftCntr.appendChild(cityWthrTemp);

                const cityWthrStus = document.createElement('div');
                cityWthrStus.setAttribute('class','city-wthr-stus');
                cityWthrStus.textContent = data[1].weather[0].description;

            leftCntr.appendChild(cityWthrStus);

        main.appendChild(leftCntr);


        const rightCntr = document.createElement('div');
        rightCntr.setAttribute('class','right-cntr');

            const wind = document.createElement('div');
            wind.setAttribute('class','wind-speed');
            wind.textContent = data[1].wind.speed;

        rightCntr.appendChild(wind);

            const humidity = document.createElement('div');
            humidity.setAttribute('class','humidity');
            humidity.textContent =  data[1].main.humidity+' %'

        rightCntr.appendChild(humidity);

            const visibility = document.createElement('div');
            visibility.setAttribute('class','visibility');
            visibility.textContent =  data[1].visibility/1000+' km'

        rightCntr.appendChild(visibility);

            const cloudiness = document.createElement('div');
            cloudiness.setAttribute('class','cloudiness');
            cloudiness.textContent =  data[1].clouds.all+' %'

        rightCntr.appendChild(cloudiness);

            const sunrise = document.createElement('div');
            sunrise.setAttribute('class','sunrise');
            sunrise.textContent =  apiData.getTimeCovert(data[1].sys.sunrise)
            console.log(data[1].sys.sunrise * 1000);
        rightCntr.appendChild(sunrise);

            const sunset = document.createElement('div');
            sunset.setAttribute('class','sunset');
            sunset.textContent =  data[1].sys.sunset

        rightCntr.appendChild(sunset);


    main.appendChild(rightCntr);

    }

   return { crutWthr }

})();