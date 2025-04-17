import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name : "Cart",
    initialState : { 
       items : [] , 
       clearedItems : []
    }, 
    reducers : {
        // Mapping actions to reducer functions
         addItem : (state, action ) => {
            state.items.push(action.payload);
         }, 
         
         removeItem : (state, action) => { 
            //state.items.splice(state.items.indexOf(action.payload), 1);
            state.items.pop()
         },
         
         clearCart : (state) => { 
             // Revive cleared Items 
            state.items.length = 0
         }


    }

});



export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
