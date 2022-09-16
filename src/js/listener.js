import { apiData } from './Data';
import { createDom } from './dom';


export const listeners = ()=>{

    async function loadData (value, unit){
        console.log(2);

        const data = await apiData.crutWthrFetch(value,unit)
        createDom.crutWthr(data)
    }


    const searchBtn = document.querySelector('.searchbtn');
    searchBtn.addEventListener('click', ()=>{
        console.log(1);
        const search = document.querySelector('.search');
        const cDeg = document.querySelector('#C-deg');
        const fDeg = document.querySelector('#F-deg');
        let value = search.value, unit
            if (cDeg.checked === true ){
                unit = 'metric'
            } else if (fDeg.checked === true ){
                unit = 'imperial'
            }
        loadData(value,unit);
    })

}
