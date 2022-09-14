
export const createDom =(() => {

    let icons = {
        icon_01d : "https://img.icons8.com/sf-regular/96/FFFFFF/sun.png",
        icon_01n : "https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/FFFFFF/external-moon-basic-ui-elements-flatart-icons-outline-flatarticons.png",
        icon_02d : "https://img.icons8.com/sf-regular/96/FFFFFF/partly-cloudy-day.png",
        icon_02n : "https://img.icons8.com/sf-regular/96/FFFFFF/partly-cloudy-night.png",
        icon_03d :  "https://img.icons8.com/sf-regular/96/FFFFFF/cloud.png",
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
        icon_50d :  "https://img.icons8.com/ios-glyphs/30/FFFFFF/foggy-night-1.png",
        icon_50n :  "https://img.icons8.com/ios-glyphs/30/FFFFFF/foggy-night-1.png",
    }

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
                cityWthrIcon.setAttribute('src',`${icons.icon_data[1].weather[0].icon}`);

                cityWthrIcon.textContent = "04d";

            leftCntr.appendChild(cityWthrIcon);

                const cityWthrTemp = document.createElement('div');
                cityWthrTemp.setAttribute('class','city-wthr-temp');
                cityWthrTemp.textContent = data[1].main.temp;

            leftCntr.appendChild(cityWthrTemp);

                const cityWthrStus = document.createElement('div');
                cityWthrStus.setAttribute('class','city-wthr-stus');
                cityWthrStus.textContent = data[1].weather[0].description;

            leftCntr.appendChild(cityWthrStus);

        main.appendChild(leftCntr)
    }

   return { crutWthr }

})();