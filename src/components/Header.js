import { useState, lazy} from 'react';
import { Link } from 'react-router-dom';

// Header comp 
const Header = () => {
    // Login State variable 
    const [loginStatus, setLoginStatus] = useState("Login");
    const handleLoginStatus = () => { 
        if(loginStatus === "Login") { 
            setLoginStatus("Logout");
        } else {
            setLoginStatus("Login");
        }
    }
    

    return (
    <div className = "border flex justify-between shadow-lg sm:bg-green-50 lg:bg-pink-50">
        <div className = "logo-container pt-1 pb-1">
            <img className = "w-[70px] h-[70px] " src = "https://www.artsindia.com/cdn/shop/products/Jayden_oil_color_illustration_of_little_lord_ganesh_eating_a_la_78ed0954-8288-4e56-a2eb-03887ad5a1b2.png?v=1681385765&width=823"/>
        </div>
        <div className =  "pt-6">
            Ganpathe Foods 
        </div>
        <div className = "logo">
            <ul className = "flex ">
                <li className = "px-2 pt-6"> 
                    <Link to = "/"> Home </Link>
                </li>
                <li className = "px-6 pt-6"> 
                     <Link to = "/about-us"> About Us </Link>
                </li>
                <li className = "px-2 pt-6"> 
                    <Link to = "/contact-us"> Contact Us</Link>
                </li>
                <li className = "px-2 pt-6"> <button onClick = {() => {handleLoginStatus()}}>{loginStatus}</button></li>
                
            </ul>
        </div>
    </div>
    );
}

export default Header;