import  ResCard, {withPromotedLabel}  from "../ResCard";
import "@testing-library/jest-dom";
import {screen, render } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResData.json";



// Testing the ResCard component 

describe("Testing the ResCard component", () => { 
    // normal ResCard Component 
    it("Should check if ResCard Component is begin loaded correctly", () => { 
       // console.log(MOCK_DATA)
        // Render 
         render(<ResCard resObj = {MOCK_DATA}/>);

        // Query
         const cardName = screen.getByText("Kwality Walls Ice Cream and More");

        // Assert
         expect(cardName).toBeInTheDocument();
          
    }),
    // withPromotedLabel Component
    it("Should check if withPromotedLabel(ResCard) is being rendered correctly", () => { 
        // Initialize PromoComp 
        const PromoComp = withPromotedLabel(ResCard);
        
        // Render
        render(<PromoComp resObj = {MOCK_DATA}/>);

        // 


        // Query
          // 1. Query the name of Restaurant 
          const cardName = screen.getByText("Kwality Walls Ice Cream and More");

          // Assert name
          expect(cardName).toBeInTheDocument(); 

          // 2. Query the "Promoted" Label 
          const Promoted = screen.getByText("Promoted");
         // console.log(Promoted);

          // Assert name
          expect(Promoted).toBeInTheDocument();
          


      
    })
    

});
