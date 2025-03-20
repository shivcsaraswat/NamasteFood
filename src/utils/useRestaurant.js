

import {useState, useEffect} from 'react';

const useRestaurant = () => { 

    // state variables to manage data 
    const [resList, setResList] = useState(null);

    const fetchData = async () => { 

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const resList = await json;
        setResList(resList);
        

    }

    useEffect( fetchData(), []);
    
    return resList;

}


export default useRestaurant;