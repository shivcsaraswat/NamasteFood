import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Menu from "./components/Menu";


// App component 
const App = () => { 
    console.log("Appp rendered");
    return (
         <div className = "App">
              <Header/>
              <Outlet/>
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
                       element : <Menu/>
                 }

           ],
           errorElement : <div>This is Error fall back for App</div>,
         },
     ]);



// creating the root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the app component on root 
root.render(<RouterProvider router = {appRouter}/>)








