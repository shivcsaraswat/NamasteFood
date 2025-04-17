import AboutUs from "../AboutUs";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";





describe("These tests test heading and input textboxes within the About Us Page", () => {
    it("Should render About Us heading on the AboutUs page ", () => { 
        // Render About Us
        render(<AboutUs/>);
    
        // Query headings from the screen
        const heading = screen.getByRole("heading");
        
        //Asserting heading to be 
        expect(heading).toBeInTheDocument;
    
    });
    
    
    it("Should be render both the input on the About Us page", () => { 
         // Render 
         render(<AboutUs/>)
         // Query
         const inputs = screen.getAllByRole("textbox");
        
        // Assert 
        expect(inputs.length).toBe(2);
    });

    it("Should get by Placeholder Name", () => { 
        // Render
           render(<AboutUs/>);

        // Query
           const name = screen.getByPlaceholderText("name");
           const message = screen.getByPlaceholderText("message"); 

        // Assert
           // name assertion
           expect(name).toBeInTheDocument;

           // message assertion
           expect(message).toBeInTheDocument;
        
           
    });

    it("Should check if the button exists in 2 ways ", () => { 
          // Render
             render(<AboutUs/>);

          // Query 
             const buttonByRole = screen.getByRole("button");
             const buttonByText = screen.getByText("Submit");

          // Assert
             expect(buttonByRole).toBeInTheDocument;
             expect(buttonByText).toBeInTheDocument;

    }); 
    
 });




