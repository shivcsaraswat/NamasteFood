import {screen,  render, fireEvent }  from "@testing-library/react";
import "@testing-library/jest-dom";

import  Header  from '../Header';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import  appStore from '../../utils/appStore';


// Describe : Header Component  testing 
describe("Testing header component", () => { 
    
    // 1. Describe : Image
    describe("Testing the image", () => {

    });
    // 2. Describe : Title  Ganpathe Foods
    describe("Testing the title component", () => { 

    });

    // 3. Describe : Basic outlook of navigation component
    describe("Testing the navigation component", () => { 
      
        it("Should test if Navigation Bar components are rendered ", () => { 
            // Render 
            render(
                <BrowserRouter>
                    <Provider store = {appStore}>
                        <Header/>
                    </Provider>
                </BrowserRouter>
             );

            // Query 
 
              // By Default Rendering 
                // Home 
                const home = screen.getByText("Home");
                // About Us
                const aboutUs = screen.getByText("About Us");
                // Contact Us 
                const contactUs = screen.getByText("Contact Us");
                // Cart (0)
                const cart_0 = screen.getByText("Cart (0)");
                // Login 
                const Login = screen.getByRole("button", { name : "Login"});

              // Assert
                expect(home).toBeInTheDocument(); 
                expect(aboutUs).toBeInTheDocument();
                expect(contactUs).toBeInTheDocument();
                expect(cart_0).toBeInTheDocument();
                expect(Login).toBeInTheDocument(); 

              // On Event Rendering 
                // Clicking Login Button 
                fireEvent.click(Login);
                
                // Query for Logout Button
                const Logout = screen.getByRole("button", {name : "Logout" } );
                
                // Assert Logout
                expect(Logout).toBeInTheDocument();
        });
       

    });
        


});

