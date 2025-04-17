import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"

const appStore = configureStore({
    reducer : {
        // Add the slice reducers here
        cart : cartReducer
    }
});

export default appStore;
