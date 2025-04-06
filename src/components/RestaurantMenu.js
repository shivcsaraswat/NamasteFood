

import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import RestaurantCategory from "./RestaurantCategory";
import { ShimmerBody } from "./ShimmerBody";
const RestaurantMenu = () => { 


    let params = useParams();


    const [dropDownMenu, setDropDownMenu] = useState();

    // Manage the RestuarantCategory Accordions
    const [openAccord, setOpenAccord] = useState(true);

    // Manage the index of the RestaurantCategory Accordion to be expanded
    const [accordOpenIndex, setAccordOpenIndex] = useState(1);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + params.resId  + "&catalog_qa=undefined&submitAction=ENTER") 
        const json = await data.json()
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card["@type"])
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((card) => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"//card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        //     ));
        const dropDown = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((card) => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        //console.log("this is dropdown " , dropDown);
        setDropDownMenu(dropDown);
    }

    useEffect(
        () => { 
                console.log("Making API call ")
                fetchData();
            },
            []
       )
       useEffect(() => {
        console.log("Updated dropDownMenu:", dropDownMenu);
        // Perform any actions that depend on the updated dropDownMenu state here
      }, [dropDownMenu]);
     
    
    return (dropDownMenu === undefined)? <ShimmerBody/> :  (

      <div className = "Restaurant Category mt-40 justify-center pl-100 "> {
       // console.log("card : " , dropDownMenu[0].card.card)
         
        dropDownMenu.map((card, index) => <RestaurantCategory card = {card.card.card} openAccord = {(index === accordOpenIndex && openAccord) } setAccordOpenIndex = {() => {setAccordOpenIndex(index); console.log("After render", index)}} setOpenAccord = {() => setOpenAccord((index === accordOpenIndex)? !openAccord : openAccord )}/>)
      }
           
      </div>
);
};


export default RestaurantMenu;