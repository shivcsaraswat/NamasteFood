import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockRestaurantData.json";
import { act } from "react-dom/test-utils";

// Defining Global Fetch function

global.fetch = jest.fn( () => {
    return Promise.resolve(
        {
            json : () => { 
                return Promise.resolve(MOCK_DATA);
            }
        }
    )

});



describe("Testing search and top rated restaurants workflows in the body component", () => { 

    // Search 

     it("Should test if search is correctly operating in body component", async () => { 
        // Render (wrap in act as shown by Professor Akshay Sir )
          
           await act(async () => { 

            render(
                <BrowserRouter>
                  <Body/>
                </BrowserRouter>
            );

           });
             
            
          

        // Query

           // Search
           const Search = screen.getByRole("button", {name : "Search" });

           const inp = screen.getByTestId("search-inp");

           fireEvent.change(inp, {target : { value : "Pizza"}});

           fireEvent.click(Search);

           const cards = screen.getAllByTestId("resCard");

           // Assert 
           expect(cards.length).toBe(4);



           // Testing the behavior of Top Rated Restaurants 

           const topRatedRestaurants = screen.getByRole("button" ,  { name : "Top Rated Restaurants" } );

           fireEvent.click(topRatedRestaurants);

           //const topRatedResCards = screen.getAllByTestId("resCard");

           //expect(topRatedResCards.length).toBe(0);

                
           

        // Assert
           
           

     });

    
});