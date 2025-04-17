import ResMenuCard from "./ResMenuCard";
import {  useDispatch, useSelector } from "react-redux";
import { removeItem , clearCart } from "../utils/slices/cartSlice";






const Cart = () => { 
   


    // Cart subscribes to the appStore to select cartItems
    const cartItems = useSelector((store) => store.cart.items);


    // Dispatch an action 
    const dispatch = useDispatch();

    // handleClearCart 
    const handleClearCart = (item) => { 
         // dispatch clearItem 
         dispatch(clearCart());
         //dispatch(removeItem(item))
        // console.log(cartItems);
    }


     const removeItem = (item) => { 
                 dispatch(removeItem(item));
     }

    
  return (
    <div className = "cart-component ">
        <div className = " cart-header text-center p-2 font-bold m-10 text-4xl">  
          Cart 
           <div className = "clear-item-btn">
                <button className = "bg-black text-white mt-4 rounded-lg " onClick = {() => handleClearCart(cartItems[0])}> 
                  <div className = "p-2 text-xl">
                    Clear Cart
                  </div> 
                </button> 

           </div>
        </div>

        {cartItems.map((cartItem, index) =>  
                   <div>
                      <ResMenuCard key = {index} ResItem = {cartItem} type = {"CartItem"}/>
                      <button className = "bg-black text-white rounded-lg" onClick = {() => removeItem(cartItem)}><span> RemoveItem </span></button>
                      
                    </div>)}

        {//console.log(cartItems.length)
        }
    </div>

  );

};


export default Cart;