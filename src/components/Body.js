import ResCard , {withPromotedLabel} from "./ResCard";
import {response, restaurantData  } from '../utils/api';
import { useState, useEffect , useContext}  from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShimmerBody, ShimmerCard } from "./ShimmerBody";
import Search from "./Search.js";
import TopRated from "./TopRated.js";
//import UserContext from '../utils/UserContext';
import UserContext from "../utils/UserContext";

const Body = () => {
    

    
    //State variable to manage list of Restaurants 
    const [listofRes, setListOfRes] = useState(null);

    //State variable to manage list of Restaurants 
    const [clicked, setClicked] = useState(false);

    //State variable to manage rendering of restaurant cards on the web page
    const [renderedList, setRenderedList] = useState(null);
 

    // State variable to manage promotion status of restaurant
    const [promo, setPromo] = useState(true);


    // extracting loggedInUser
    const {loggedInUser, setUserName} = useContext(UserContext);

    // useRestaurant();
    
    const fetchData =  async () => { 
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log("this is json data", json.data);
        setListOfRes(json.data.cards[1]?.card?.card.gridElements["infoWithStyle"].restaurants)
        setRenderedList(json.data.cards[1]?.card?.card.gridElements["infoWithStyle"].restaurants)
        console.log("this is list of res " , renderedList);
    }


    // Makes the swiggy API call
    
    useEffect (
        () => {
            console.log("use effect called!!")
            fetchData();
        },
        []
    );


    console.log("Body rendered");

    const PromoComp = withPromotedLabel(ResCard);
    console.log(PromoComp);
   
    return (renderedList === null)? <ShimmerBody/> :  (
    <div className = "body">
        <div className = "search-container">
            <Search listofRes = { listofRes } setRenderedList = {setRenderedList}/>
        </div>

        <div >
            <input className = "input p-2 border-4" value = {loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>
       
          <TopRated listofRes={listofRes} setRenderedList={setRenderedList}/>
        <div className = "res-container flex flex-wrap "> 
            {
             renderedList.map(restaurant => 
             { //console.log(restaurant)
             return (
             <Link key = {restaurant.info.id} to = {"/restaurant-menu/" + restaurant.info.id} > 
             { promo?<PromoComp resObj = {restaurant.info}/> : <ResCard  resObj = {restaurant.info}/>}
             </Link>
             )
            }
        )
        }
           
        </div>
    </div>
    );

}

 export default Body
