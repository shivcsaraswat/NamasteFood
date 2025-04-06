
import {useState} from 'react';

const RestaurantCategory = ({card, openAccord, setAccordOpenIndex, setOpenAccord}) => {
    
    
     
     if(card.title === "Recommended") {
        console.log("the card item is  ", card.itemCards.map(card => card.card.info));
      }
    
    
    const AccordionBody = ({AccordItem}) => { 
        console.log("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit" + AccordItem.imageId)
        return (
        <div > 
            <div className = "flex justify-between py-4 text-balance">
                <div className = "w-9/12 ">
                    <div className = "name ">
                            {AccordItem.name}
                    </div> 
                    <div className = "price">
                                ₹ {AccordItem.price/100}
                    </div>
                    <div className = "description ">
                            {AccordItem.description}
                    </div>
                </div>
                <div className = "w-3/12 h-full">
                    <div>
                        <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + AccordItem.imageId}>
                        </img> 
                    </div>
                    
                    <div className = "add-btn   flex justify-left">
                        <button className = " text-green-400 bg-white rounded-lg w-12 " >
                                <span> Add  </span>
                        </button>
                    </div>
                </div>
            </div> 
              
            <div className = "separator border-b-1 border-red-500">
                                           
            </div>

             
        </div>);
    }
    
     const handleAccord = () => { 
         
         setAccordOpenIndex();
         console.log("After Index change openAccord", openAccord)
         setOpenAccord();
         console.log("After accord re-render openAccord", openAccord)
         
     };

    return (
        <div className = "text-center p-2 bg-gray-200 shadow m-4 w-9/12 "> 
            {/* Accordion Header */}
            <div className = "accordion-header flex justify-between" onClick = {handleAccord}>
                    <div className = "Category Title">
                            {card.title} 
                    </div>
                    <div className = "arrow bar">
                            <span> ⬇️</span>
                    </div>
            </div>
            <div className = "accord-body-container">
                {
                    openAccord && card.itemCards.map(card => <AccordionBody AccordItem = {card.card.info}/>)
                }
            </div>
        </div>
    );
}


export default RestaurantCategory;