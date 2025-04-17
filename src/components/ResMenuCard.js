import { useDispatch } from "react-redux";

import {removeItem } from "../utils/slices/cartSlice";
import { addItem } from "../utils/slices/cartSlice";



const ResMenuCard = ({ResItem, type}) => { 
     const dispatch = useDispatch();
    
    
          // handleAddItem : dispatches action addItem with prop item 
          const handleAddItem = (item) => { 
             dispatch(addItem(item));
         }
    

    // console.log("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit" + ResItem.imageId)
     return (
     <div data-testid = "resItem"> 
         <div className = "flex justify-between py-4 text-balance" >
             <div className = "w-9/12 ">
                 <div className = "name ">
                         {ResItem.name}
                 </div> 
                 <div className = "price">
                             ₹ {ResItem.price/100}
                 </div>
                 <div className = "description ">
                         {ResItem.description}
                 </div>
             </div>
             <div className = "w-3/12 h-full">
                 <div>
                     <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + ResItem.imageId}>
                     </img> 
                 </div>
                 
                 { (type === "ResMenuItem") && <div className = "add-btn   flex justify-left">
                     <button className = " text-green-400 bg-white rounded-lg w-12 " onClick = {() => handleAddItem(ResItem)} >
                             <span> Add  </span>
                     </button>
                 </div>
                    }
             </div>
         </div> 
           
         <div className = "separator border-b-1 border-red-500">
                                        
         </div>

          
     </div>);
 }





export default ResMenuCard;