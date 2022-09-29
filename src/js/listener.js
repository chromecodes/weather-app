import { apiData } from './Data';
import { createDom } from './dom';


export const listeners = ()=>{

    async function loadData (value, unit){
        console.log(2);
        const data = await apiData.crutWthrFetch(value,unit)
        createDom.crutWthr(data)
    }

    function clear (){
        const mainCnt = document.querySelector('.main-cnt');
        if( mainCnt.firstChild !== null){
            mainCnt.removeChild(mainCnt.firstChild)
        }
    }
    function process (){
        clear();
        const search = document.querySelector('.search');
        const cDeg = document.querySelector('#C-deg');
        console.log(cDeg.checked);
        const fDeg = document.querySelector('#F-deg');
        console.log(fDeg.checked);
        let value = search.value, unit
            if (cDeg.checked === true ){
                unit = 'metric'
                console.log('c');
            } else if (fDeg.checked === true ){
                unit = 'imperial'
                console.log('f');

            }
        loadData(value,unit);
    }
    const searchBtn = document.querySelector('.searchbtn');
    searchBtn.addEventListener('click', process);

    const cDegBtn = document.querySelector('#C-deg');
    cDegBtn.addEventListener('click', process);

    const fDegBtn = document.querySelector('#F-deg');
    fDegBtn.addEventListener('click', process);

}
