import "@testing-library/jest-dom";
import {screen, render, fireEvent} from "@testing-library/react";
import { BrowserRouter , MemoryRouter } from 'react-router-dom';
import MOCK_DATA from "../mocks/mockRestaurantMenu";
import MOCK_DATA_2 from "../mocks/mockRes2.json";
import RestaurantMenu from "../RestaurantMenu";
import appStore from "../../utils/appStore";
import {Provider} from 'react-redux';
import { act } from "react-dom/test-utils";
import Header from "../Header";
import Cart from "../Cart";

// do something interesting

// global.fetch = jest.fn(() => { 
//     return Promise.resolve(
//         {json : () => { 
//             Promise.resolve(MOCK_DATA)
//         }
//     }
//     )
// })


global.fetch = jest.fn( () => {
    return Promise.resolve(
        {
            json : () => { 
                return Promise.resolve(MOCK_DATA_2);
            }
        }
    )

});


describe("Testing different components", () => { 

    // Test 1 : 
    it("Restaurant Menu is being render", async() => {
        // Render 
        const resRoute = "/restaurant-menu/55473";
        await act (
            async() => {
                render(
            <BrowserRouter>
            <Provider store = {appStore}>
            <RestaurantMenu/>
            <Header/>
            <Cart/>
            </Provider>
            </BrowserRouter>
            )} 
        );
        // Query 

        // Find Egg In Rolls ( Restaurant Category )

        const Card1 = screen.getByText("Egg In Rolls");
        fireEvent.click(Card1);
        const ResItems = screen.getAllByTestId("resItem");
        expect(ResItems.length).toBe(6);



        // Find the add btn ( Restaurant Category )
        
        
        const AddBTNS = screen.getAllByRole("button", {name : "Add"});
        expect(AddBTNS.length).toBe(6);
        fireEvent.click(AddBTNS[0]);

        
        // Check the cart updates 
        
        const cartItems = screen.getByText("Cart (1)");
        expect(cartItems).toBeInTheDocument();
        fireEvent.click(AddBTNS[1]);

        
        // Check header updates to cart icon
        const cartItems2 = screen.getByText("Cart (2)");
        
        
        // Check Cart updates on the cart page
        const resCartItems = screen.getAllByTestId("resItem");
        expect(resCartItems.length).toBe(8);
 
        // Clear Cart BTN 
        const clearCartBTN = screen.getByRole("button", {name : "Clear Cart"});
        fireEvent.click(clearCartBTN);
        
        // Check Clear Cart BTN 
        const resCartItems2 = screen.getAllByTestId("resItem");
        expect(resCartItems2.length).toBe(6);


        expect(cartItems2).toBeInTheDocument();
        expect(Card1).toBeInTheDocument();

        
       
  
          
        // Assert 

    })

});




        

        
