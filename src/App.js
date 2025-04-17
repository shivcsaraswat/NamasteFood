import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from './utils/UserContext';
import {useState, useContext} from 'react';

import { Provider} from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart'


// App component 
const App = () => { 

   // console.log("Appp rendered");
    const {loggedInUser} = useContext(UserContext);
    const [userName , setUserName] = useState(loggedInUser);
    return (
       
            <div className = "App">
               <Provider store = {appStore}>
                    <UserContext.Provider value = {{loggedInUser : userName, setUserName}}>
                        <Header/>
                        <Outlet/>
                    </UserContext.Provider>
                </Provider>
            </div>
        );
}


// Routing 
const appRouter = createBrowserRouter([
         { 
           path : "/",
           element : <App/>,
           children : [
               {
                    path : "/",
                    element : <Body/>
                },
                {
                    path : "/about-us",
                    element : <AboutUs/>
                }, 
                { 
                    path : "/contact-us",
                    element : <ContactUs/>
                },
                {
                       path : "/restaurant-menu/:resId",
                       element : <RestaurantMenu/>
                },
                { 
                       path : "/cart",
                       element : <Cart/>
                } 


           ],
           errorElement : <div>This is Error fall back for App</div>,
         },
     ]);



// creating the root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the app component on root 
root.render(<RouterProvider router = {appRouter}/>)








